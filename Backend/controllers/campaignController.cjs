const Campaigns = require('../models/campaignModel.cjs');
const asyncHandler = require('express-async-handler');
const ContactBook = require('../models/contactBookModel.cjs');
const User = require('../models/userModel.cjs');
const moment = require('moment-timezone');


const getCampaigns = asyncHandler(async (req, res) => {
  try {
    const campaigns = await Campaigns.find({'user_id' : req.user._id});
    res.json({ campaigns });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const createCampaign = asyncHandler(async (req, res) => {
  const { campaign_name, sender_email, mailing_lists, subject, preview_text, email_content, action } = req.body;
  try {
      
    const senderIndex = req.user.senders.findIndex(sender => sender.sender_email == sender_email);
    if (senderIndex === -1) res.json({ error: "Sender id not found" });

    if(!mailing_lists.every(list => req.user.mailing_lists.includes(list))) res.json({ error: "Mailing lists(s) not found" })
    
    if(action=="draft" || action=="test") status="Draft";
    else if(action=="send") status="Queued";
    
    const contactBook = await ContactBook.findById(req.user.contact_book);
    const filteredContacts = contactBook.contacts.filter(contact =>
        mailing_lists.some(list => contact.mailing_lists.includes(list))
    );
    
    const newCampaign = {
      "user_id": req.user._id,
      "status": status,
      "campaign_name": campaign_name,
      "subject": subject,
      "preview_text": preview_text,
      "content": Buffer.from(email_content, 'base64').toString('utf-8'),
      "sender_email": sender_email,
      "mailing_lists": mailing_lists,
      "mails": [],
      "campaign_statistics": {
        "delivery_rate": 0,
        "opening_rate": 0,
        "conversion_rate": 0,
        "unsubscription_rate": 0
      }
    }
    
    for (const contact of filteredContacts) {
        newCampaign.mails.push({
            "contact_id": contact.email,
            "statistics": {
                "sent": false,
                "delivery_status": false,
                "opening_status": false,
                "clicks": 0,
                "unsubscription": false
            }
        });
    }
    
    const campaign = await Campaigns.create(newCampaign);
    if (campaign) {
        res.json({"status": "success"});
    } else {
        res.json({ error: "Error while creating campaign"});
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const updateCampaign = asyncHandler(async (req, res) => {
  const { id, campaign_name, sender_email, mailing_lists, subject, preview_text, email_content, action } = req.body;
  try {
      
    const campaign = await Campaigns.findById(id);
    if(!campaign) res.status(404).json({ error: "Campaign not found" });
    if (campaign.status != "Draft") res.json({ error: "Only draft campaigns can be updated" });
      
    const senderIndex = req.user.senders.findIndex(sender => sender.sender_email == sender_email);
    if (senderIndex === -1) res.json({ error: "Sender id not found" });

    if(!mailing_lists.every(list => req.user.mailing_lists.includes(list))) res.json({ error: "Mailing lists(s) not found" });
    
    if(action=="draft" || action=="test") status="Draft";
    else if(action=="send") status="Queued";
    
    const contactBook = await ContactBook.findById(req.user.contact_book);
    const filteredContacts = contactBook.contacts.filter(contact =>
        mailing_lists.some(list => contact.mailing_lists.includes(list))
    );
    
    campaign.status = status;
    campaign.campaign_name = campaign_name;
    campaign.subject = subject;
    campaign.preview_text = preview_text;
    campaign.content = Buffer.from(email_content, 'base64').toString('utf-8');
    campaign.sender_email = sender_email;
    campaign.mailing_lists = mailing_lists;
    campaign.mails = [];
    campaign.campaign_statistics = {
        "delivery_rate": 0,
        "opening_rate": 0,
        "conversion_rate": 0,
        "unsubscription_rate": 0
    };
    
    for (const contact of filteredContacts) {
        campaign.mails.push({
            "contact_id": contact.email,
            "statistics": {
                "sent": false,
                "delivery_status": false,
                "opening_status": false,
                "clicks": 0,
                "unsubscription": false
            }
        });
    }
    
    const update = await campaign.save();
    if (update) {
        res.json({"status": "success"});
    } else {
        res.json({ error: "Error while updating campaign"});
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const getCampaign = asyncHandler(async (req, res) => {
  const { campaign_id } = req.params;
  try {
    const campaign = await Campaigns.findById(campaign_id);
    res.json(campaign);
  } catch (error) {
    return res.status(404).json({ error: 'Campaign not found' });
  }
});


const campaignStatistics = asyncHandler(async (req, res) => {
  const { from_date, to_date } = req.body;
  const user_id = req.user._id;
  try {
    const startDate = moment(from_date, 'YYYY-MM-DD').toDate();
    const endDate = moment(to_date, 'YYYY-MM-DD').toDate();
    
    const campaigns = await Campaigns.find({
        user_id: user_id,
        createdAt: { 
            $gte: startDate,
            $lte: endDate
        },
        status: { $in: ['Queued', 'Processed'] }
    });
    
    let delivered = 0, opened = 0, converted = 0, unsubscribed = 0, recipients = 0;
    
    for (const campaign of campaigns) {
        recipients += campaign.mails.length;
        delivered += (campaign.campaign_statistics.delivery_rate * campaign.mails.length);
        opened += (campaign.campaign_statistics.opening_rate * campaign.mails.length);
        converted += (campaign.campaign_statistics.conversion_rate * campaign.mails.length);
        unsubscribed += (campaign.campaign_statistics.unsubscription_rate * campaign.mails.length);
    }
    
    res.json({
        campaigns: campaigns,
        statistics: {
            recipients: recipients,
            delivery_rate: delivered/recipients,
            opening_rate: opened/recipients,
            conversion_rate: converted/recipients,
            unsubscription_rate: unsubscribed/recipients
        }
    });
  } catch (error) {
    return res.status(404).json({ error: 'Campaign not found' });
  }
});


const modifyCampaignSettings = asyncHandler(async (req, res) => {
  const {timezone, time_format, anonymous_tracking, test_list, default_sender} = req.body;
  const timezones = moment.tz.names();
  try {
      
    if(!timezones.includes(timezone)) res.json({ error: 'Timezone not valid', options: timezones });
    if(![12,24].includes(time_format)) res.json({ error: 'Timeformat not valid' });

    const senderIndex = req.user.senders.findIndex(sender => sender.sender_email == default_sender);
    if (senderIndex === -1) res.json({ error: 'Sender not found' });
    
    const newCampaignSettings = {
        timezone: timezone,
        time_format: time_format,
        anonymous_tracking: anonymous_tracking,
        test_list: test_list,
        default_sender: default_sender
    };
    
    await User.findByIdAndUpdate(
        req.user._id,
        { $set: { campaign_settings: newCampaignSettings } }
    );
    
    res.json({ "message" : "Campaign Settings updated successfully" });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const campaignSettings = asyncHandler(async (req, res) => {
  try {
    res.json({'campaign_settings' : req.user.campaign_settings});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = { getCampaigns, createCampaign, updateCampaign, getCampaign, campaignStatistics, modifyCampaignSettings, campaignSettings };