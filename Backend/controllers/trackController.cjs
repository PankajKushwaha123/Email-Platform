const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.cjs');
const ContactBook = require('../models/contactBookModel.cjs');
const Campaigns = require('../models/campaignModel.cjs');
const Transactional = require('../models/transactionalModel.cjs');
const path = require('path');
const fs = require('fs');

const track = asyncHandler(async (req, res) => {
    const { campaign_id, transaction_id, tracking_id, redirect } = req.query;
    
    try {
        if(transaction_id){
            const transaction = await Transactional.findById(transaction_id);
            if (!transaction) {
                return res.json({ error: 'Transaction not found' });
            }

            transaction.statistics.clicks += 1;
            transaction.statistics.delivery_status = true;
            transaction.statistics.opening_status = true;
            
            await transaction.save();
            
            res.redirect(decodeURIComponent(redirect));
        } else {
            const campaign = await Campaigns.findById(campaign_id);
            if (!campaign) {
                return res.json({ error: 'Campaign not found' });
            }
            
            const mail = campaign.mails.find(mail => mail._id.toString() === tracking_id);
            if (!mail) {
                return res.json({ error: 'Invalid tracking id' });
            }
            mail.statistics.clicks += 1;
            mail.statistics.delivery_status = true;
            mail.statistics.opening_status = true;
            
            await campaign.save();
            
            res.redirect(decodeURIComponent(redirect));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const receipt = asyncHandler(async (req, res) => {
    const { campaign_id, transaction_id, tracking_id } = req.query;
    
    try {
        if (transaction_id) {
            const transaction = await Transactional.findById(transaction_id);

            transaction.statistics.delivery_status = true;
            transaction.statistics.opening_status = true;
            
            await transaction.save();
            
            const imagePath = path.join(__dirname, '../public/green_tick.png');
            fs.readFile(imagePath, (err, data) => {
                if (err) {
                    console.error('Error reading image file:', err);
                    return res.status(500).send('Internal Server Error');
                }
                res.contentType('image/jpeg');
                res.send(data);
            });
        } else {
            const campaign = await Campaigns.findById(campaign_id);
            const mail = campaign.mails.find(mail => mail._id.toString() === tracking_id);

            mail.statistics.delivery_status = true;
            mail.statistics.opening_status = true;
            
            await campaign.save();
            
            const imagePath = path.join(__dirname, '../public/green_tick.png');
            fs.readFile(imagePath, (err, data) => {
                if (err) {
                    console.error('Error reading image file:', err);
                    return res.status(500).send('Internal Server Error');
                }
                res.contentType('image/jpeg');
                res.send(data);
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const unsubscribe = asyncHandler(async (req, res) => {
    const { campaign_id, tracking_id } = req.query;
    
    try {
        const campaign = await Campaigns.findById(campaign_id);
        if (!campaign) {
            return res.json({ error: 'Campaign not found' });
        }
        const user = await User.findById(campaign.user_id);
        if (!user) {
            return res.json({ error: 'Campaigner not found' });
        }
        const contactBook = await ContactBook.findById(user.contact_book);
        if (!contactBook) {
            return res.json({ error: 'Contactbook not found' });
        }
        
        const mail = campaign.mails.find(mail => mail._id.toString() === tracking_id);
        
        const contactIndex = contactBook.contacts.findIndex(contact => contact.email == mail.contact_id);
        
        //arr1.filter(value => arr2.includes(value));
        
        const intersectingLists = campaign.mailing_lists.filter(list => contactBook.contacts[contactIndex].mailing_lists.includes(list));
        if (intersectingLists.length == 0){
            return res.send("Already unsubscribed.")
        }
        
        const listIndex = contactBook.contacts[contactIndex].mailing_lists.findIndex(list => list == intersectingLists[0]);
        if (listIndex != -1) {
            contactBook.contacts[contactIndex].mailing_lists.splice(listIndex, 1);
        }
        const update = await contactBook.save();
        if (update) {
            return res.send("Unsubscription Successful.")
        } else {
            return res.send("Unsubscription Unsuccessful.")
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const verify = asyncHandler(async (req, res) => {
    const { token } = req.params;
    const user = await User.findById(token);
    if (user && user.isVerified==false) {
        return res.redirect("http://mailmort.co");
    } else {
        return res.send("Invalid token or token used already.");
    }
});


module.exports = { track, receipt, unsubscribe, verify };