const Transactional = require('../models/transactionalModel.cjs');
const User = require('../models/userModel.cjs');
const APIKeys = require('../models/apiKeysModel.cjs');
const asyncHandler = require('express-async-handler');
const moment = require('moment-timezone');


const transactionalHistory = asyncHandler(async (req, res) => {
  try {
    const transactionalEmails = await Transactional.find({'user_id' : req.user._id});
    res.json({ transactionalEmails });
  } catch (error) {
    return res.status(404).json({ error: 'Emails not found' });
  }
});


const transactionalStatistics = asyncHandler(async (req, res) => {
  const { from_date, to_date } = req.body;
  const user_id = req.user._id;
  try {
    const startDate = moment(from_date, 'YYYY-MM-DD').toDate(), endDate = moment(to_date, 'YYYY-MM-DD').toDate();
    
    const emails = await Transactional.find({ user_id: user_id, createdAt: { $gte: startDate, $lt: endDate } });
    
    let delivered = 0, opened = 0, converted = 0, recipients = 0;
    
    for (const email of emails) {
        recipients += 1;
        if (email.statistics.delivery_status) delivered += 1;
        if (email.statistics.opening_status) opened += 1;
        if (email.statistics.clicks > 0) converted += 1;
    }
    if (recipients==0) recipients += 1;
    
    res.json({
        transactionalEmails: emails,
        statistics: {
            recipients: recipients,
            delivery_rate: delivered/recipients,
            opening_rate: opened/recipients,
            conversion_rate: converted/recipients,
        }
    });
  } catch (error) {
    return res.status(404).json({ error: 'Campaign not found' });
  }
});


const modifyTransactionalSettings = asyncHandler(async (req, res) => {
  const {timezone, time_format, anonymous_tracking, default_sender} = req.body;
  const timezones = moment.tz.names();

  try {
    let api_keys = [];
    if (req.user.transactional_settings && req.user.transactional_settings.api_keys) {
        api_keys = req.user.transactional_settings.api_keys;
    }
    if(!timezones.includes(timezone)) res.json({ error: 'Timezone not valid', options: timezones });
    if(![12,24].includes(time_format)) res.json({ error: 'Timeformat not valid' });

    const senderIndex = req.user.senders.findIndex(sender => sender.sender_email == default_sender);
    if (senderIndex === -1) res.json({ error: 'Sender not found' });
    
    const newTransactionalSettings = {
        timezone: timezone,
        time_format: time_format,
        anonymous_tracking: anonymous_tracking,
        default_sender: default_sender,
        api_keys: api_keys
    };
    
    await User.findByIdAndUpdate(
        req.user._id,
        { $set: { transactional_settings: newTransactionalSettings } }
    );
    
    res.json({ "message" : "Transactional Settings updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const transactionalSettings = asyncHandler(async (req, res) => {
  try {
    res.json({'transactional_settings' : req.user.transactional_settings});
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error: 'Settings not found' });
  }
});


const createAPI = asyncHandler(async (req, res) => {
  const { key_name } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    
    const keys = await APIKeys.findOne({ user_id: req.user._id, key_name: key_name });
    
    if(keys) {
        return res.json({ error: "Key Name already exists" });
    }
    
    const key = await APIKeys.create({
        user_id: user._id,
        key_name: key_name,
        api_key: [...Array(16)].map(() => Math.random().toString(36)[2]).join(''),
        api_secret: [...Array(16)].map(() => Math.random().toString(36)[2]).join('')
    });
    
    if(key){
        res.json({ 
            message: 'API Key created successfully' , 
            details: {
                key_name: key.key_name, 
                key_value: key.api_key, 
                api_secret: key.api_secret 
            }
        });
    } else {
        res.json({ error: 'Could not create API Key' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const getAPIKeys = asyncHandler(async (req, res) => {
  try {
    const keys = await APIKeys.find({ user_id: req.user._id });
    res.json( keys )
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const deleteAPI = asyncHandler(async (req, res) => {
  const { key_name } = req.body;
  try {
    const deletedDocument = await APIKeys.findOneAndDelete({ user_id: req.user._id, key_name: key_name });
    if(deletedDocument) {
        res.json({ message : "API Key deleted successfully" });
    } else {
        res.json({ message : "API Key not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const sendMail = asyncHandler(async (req, res) => {
  const { api_key } = req.params;
  const { api_secret, email, content, sender_id, subject, preview_text } = req.body;
  
  try {
    //return res.json({ api_key, api_secret });
    if (!email || email==""){
        return res.json({ error: "Invalid email id" });
    }
    if(!content || !subject || content=="" || subject==""){
        return res.json({ message: 'Email content invalid' });
    }
    const api_pair = await APIKeys.findOne({ "api_key": api_key, "api_secret": api_secret });
    if (!api_pair) {
        return res.status(404).json({ message: 'API key or Secret not valid' });
    }
    const user = await User.findById(api_pair.user_id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const senderIndex = user.senders.findIndex(sender => sender.sender_email == sender_id);
    if (senderIndex === -1) {
        res.json({ error: "Sender id not found" });
    }
    const sender_profile = user.senders[senderIndex];
    
    const newTransaction = {
      "user_id": api_pair.user_id,
      "sender_email": sender_id,
      "contact_id": email,
      "content": Buffer.from(content, 'base64').toString('utf-8'),
      "status": "Queued",
      "subject": subject,
      "preview_text": preview_text,
      "statistics": {
        "delivery_status": false,
        "opening_status": false,
        "clicks": 0,
        "unsubscription_status": false
      }
    }
    
    const insert = await Transactional.create(newTransaction);

    if (insert) {
        res.json({ message : "Email Queued successfully" });
    } else {
        res.json({ error: "Could not queue email" })
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = { transactionalHistory, modifyTransactionalSettings, transactionalStatistics, transactionalSettings, createAPI, getAPIKeys, deleteAPI, sendMail };