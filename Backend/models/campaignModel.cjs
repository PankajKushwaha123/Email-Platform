const mongoose = require('mongoose');
const { Schema } = mongoose;


const mailSchema = new mongoose.Schema({
  contact_id: String,
  statistics: {
    sent: Boolean,
    delivery_status: Boolean,
    opening_status: Boolean,
    clicks: Number,
    unsubscription: Boolean,
  },
});


const campaignStatisticsSchema = new mongoose.Schema({
  delivery_rate: Number,
  opening_rate: Number,
  conversion_rate: Number,
  unsubscription_rate: Number,
});


const campaignSchema = new mongoose.Schema({
  user_id: String,
  campaign_name: String,
  status: String,
  subject: String,
  preview_text: String,
  content: String,
  sender_email: String,
  mailing_lists: [ String ],
  mails: [ mailSchema ],
  campaign_statistics: campaignStatisticsSchema,
}, { timestamps: true });


const Campaigns = mongoose.model('Campaigns', campaignSchema);
module.exports = Campaigns;
