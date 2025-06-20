const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');
const moment = require('moment-timezone');


const User = require('../models/userModel.cjs');
const Campaigns = require('../models/campaignModel.cjs');
const Transactional = require('../models/transactionalModel.cjs');
const ContactBook = require('../models/contactBookModel.cjs');
const iRedMail_Credential = require('../models/iredmailModel.cjs')


const processCampaigns = asyncHandler(async (req, res) => {
    const queuedCampaigns = await Campaigns.find({ status: { $in: ['Queued', 'Test'] } });
    
    for (const campaign of queuedCampaigns) {
        const user = await User.findById(campaign.user_id);
        
        const sender = user.senders.find(sender => sender.sender_email == campaign.sender_email);
        if (!sender) res.json({ error: "Sender id not found" });
        
        const credentials = await iRedMail_Credential.findOne({ "email": sender.sender_email, "user_id": campaign.user_id });
        if(!credentials){
            console.error(credentials, sender.email, mail.user_id);
            return res.json({ error: "Contact Admin" });
        }

        const smtpTransporter = nodemailer.createTransport({
          host: 'mail.mailmort.club',
          port: 587,
          secure: false,
          auth: {
            user: credentials.email,
            pass: credentials.password
          },
          tls: {
              rejectUnauthorized: false
          }
        });
        
        const campSubject = campaign.subject;
        const finalStatus = "Processed";
        
        if(campaign.status == "Test") {
            const campSubject = "[Test Mail] " + campaign.subject;
            const finalStatus = "Draft";
        }
        
        const mails = campaign.mails;
        for (const mail of mails) {
            
            const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g;
            let match;
            let finalHtml = campaign.content;
            const baseURL = "http://apis.mailmort.co/track/links?campaign_id=" + campaign._id + "&tracking_id=" + mail._id;
            
            while ((match = regex.exec(campaign.content)) !== null) {
                const originalUrl = match[2];
                const appendedUrl = baseURL + "&redirect=" + encodeURIComponent(originalUrl);
                finalHtml = finalHtml.replace(originalUrl, appendedUrl);
            }
            
            finalHtml += '<hr><a href=http://apis.mailmort.co/track/unsubscribe?campaign_id=' + campaign._id + '&tracking_id=' + mail._id + ' target=_blank>Click here to Unsubscribe from the mailing list</a><hr><div><table border=0 cellpadding=8 cellspacing=0><tr><td><a href=https://mailmort.co target=_blank style=text-decoration:none><img alt=MailMort height=32 src=https://apis.mailmort.co/track/receipt?campaign_id='+ campaign._id +'&tracking_id='+ mail._id +' width=32></a><td><span style=color:#777>Sender notified by</span><br><a href=https://mailmort.co target=_blank><span class=il>MailMort</span></a><td><span style=color:transparent;font-size:0>01/05/23, 09:37:56 AM</span><td></table></div>';
            
            await smtpTransporter.sendMail({
              from: sender.sender_name + " <" + credentials.email + ">",
              to: mail.contact_id,
              replyTo: sender.reply_to,
              subject: campSubject,
              text: campaign.preview_text,
              html: finalHtml
            }, (error, info) => {
              if (error) {
                console.error(error);
              } else {
                console.error(info);
              }
            });
            
        }
        
        campaign.status = finalStatus;
        await campaign.save();
    }
    
    res.json({ message: "All queued campaigns processed successfully" });
});


const processTransactionalMails = asyncHandler(async (req, res) => {
    const queuedMails = await Transactional.find({ status: 'Queued' });
    
    for (const mail of queuedMails) {
        const user = await User.findById(mail.user_id);
        
        const sender = user.senders.find(sender => sender.sender_email == mail.sender_email);
        if (!sender) {
            return res.json({ error: "Sender id not found" });
        }
        
        const credentials = await iRedMail_Credential.findOne({ "email": sender.sender_email, "user_id": mail.user_id });
        if(!credentials){
            console.error(credentials, sender.email, mail.user_id);
            return res.json({ error: "Contact Admin" });
        }

        const smtpTransporter = nodemailer.createTransport({
          host: 'mail.mailmort.club',
          port: 587,
          secure: false,
          auth: {
            user: credentials.email,
            pass: credentials.password
          },
          tls: {
              rejectUnauthorized: false
          }
        });

        const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g;
        let match;
        let finalHtml = mail.content;
        const baseURL = "http://apis.mailmort.co/track/links?transaction_id=" + mail._id;
        
        while ((match = regex.exec(mail.content)) !== null) {
            const originalUrl = match[2];
            const appendedUrl = baseURL + "&redirect=" + encodeURIComponent(originalUrl);
            finalHtml = finalHtml.replace(originalUrl, appendedUrl);
        }
        
        finalHtml += '<hr>The email is for a transaction performed at the presence of the sender.<hr><div><table border=0 cellpadding=8 cellspacing=0><tr><td><a href=https://mailmort.co target=_blank style=text-decoration:none><img alt=MailMort height=32 src="https://apis.mailmort.co/track/receipt?transaction_id='+ mail._id +'" width=32></a><td><span style=color:#777>Sender notified by</span><br><a href=https://mailmort.co target=_blank><span class=il>MailMort</span></a><td><span style=color:transparent;font-size:0></span><td></table></div>';
        
        const sent = await smtpTransporter.sendMail({
          from: sender.sender_name + " <" + sender.sender_email + ">",
          to: mail.contact_id,
          replyTo: sender.reply_to,
          subject: mail.subject,
          text: mail.preview_text,
          html: finalHtml
        }, (error, info) => {
          if (error) {
            console.error(error);
          } else {
            console.error(info);
          }
        });

        mail.status = "Processed";
        await mail.save();
    }
    
    return res.json({ message: "All queued campaigns processed successfully" });
});


const refreshCampaignStatistics = asyncHandler(async (req, res) => {
    const campaigns = await Campaigns.find({ status: 'Processed' });
    
    for (const campaign of campaigns) {
        let delivered = 0, opened = 0, converted = 0, unsubscribed = 0, total = 0;
        
        const mails = campaign.mails;
        for (const mail of mails) {
            total += 1;
            if (mail.statistics.delivery_status) delivered += 1;
            if (mail.statistics.opening_status) opened += 1;
            if (mail.statistics.clicks > 0) converted += 1;
            if (mail.statistics.unsubscription) unsubscribed += 1;
        }
        
        if(total == 0) total += 1;
        
        campaign.campaign_statistics.delivery_rate = delivered/total;
        campaign.campaign_statistics.opening_rate = opened/total;
        campaign.campaign_statistics.conversion_rate = converted/total;
        campaign.campaign_statistics.unsubscription_rate = unsubscribed/total;
    
        await campaign.save();
    }
    
    res.json({ message: "All campaign statistics updated successfully" });
});


module.exports = { processCampaigns, refreshCampaignStatistics, processTransactionalMails };