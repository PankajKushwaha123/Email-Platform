const mongoose = require('mongoose');


const contactHistorySchema = new mongoose.Schema({
  type: { type: String, required: true },
  campaign_id: { type: String },
  transaction_id: { type: String },
  update: { type: String },
  date: { type: Date, required: true },
});


const addressSchema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  postal_code: { type: String },
});


const contactSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  mailing_lists: [{ type: String }],
  Notes: { type: String },
  history: [contactHistorySchema],
  address: addressSchema,
});


const contactBookSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  contacts: [contactSchema],
}, { timestamps: true });


const ContactBook = mongoose.model('ContactBook', contactBookSchema);
module.exports = ContactBook;