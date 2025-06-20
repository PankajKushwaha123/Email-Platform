const mongoose = require('mongoose');
const { Schema } = mongoose;

const iredmailCredentialSchema = new mongoose.Schema({
  user_id: String,
  email: String,
  password: String,
}, { timestamps: true });


const iRedMail_Credential = mongoose.model('iRedMail_Credential', iredmailCredentialSchema);
module.exports = iRedMail_Credential;
