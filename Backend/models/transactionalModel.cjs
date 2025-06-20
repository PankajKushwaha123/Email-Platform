const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionalSchema = new mongoose.Schema({
  user_id: String,
  sender_email: String,
  contact_id: String,
  content: String,
  status: String,
  subject: String,
  preview_text: String,
  statistics: {
    delivery_status: Boolean,
    opening_status: Boolean,
    clicks: Number,
    unsubscription_status: Boolean
  },
}, { timestamps: true });

const Transactional = mongoose.model('Transactional', transactionalSchema);
module.exports = Transactional;
