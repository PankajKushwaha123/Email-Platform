const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const campaignSettingsSchema = new mongoose.Schema({
  timezone: String,
  time_format: Number,
  anonymous_tracking: Boolean,
  test_list: [ String ],
  default_sender: String
});


const apiKeysSchema = new mongoose.Schema({
  key_name: String,
  key_value: String,
  api_secret: String,
});


const transactionalSettingsSchema = new mongoose.Schema({
  timezone: String,
  time_format: Number,
  anonymous_tracking: Boolean,
  default_sender: String,
  api_keys: [apiKeysSchema],
});


const senderSchema = new mongoose.Schema({
  sender_name: String,
  sender_email: String,
  reply_to: String,
});


const domainSchema = new mongoose.Schema({
  domain_name: String,
  status: String,
  date: String,
});


const inboxSchema = new mongoose.Schema({
  username: String,
  domain: String,
  status: String,
  date: String,
});


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  contact_book: String,
  mailing_lists: [ String ],
  campaign_settings: campaignSettingsSchema,
  transactional_settings: transactionalSettingsSchema,
  senders: [ senderSchema ],
  inboxes: [ inboxSchema ],
  domains: [ domainSchema ]
}, { timestamps: true });


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


const User = mongoose.model('User', userSchema);
module.exports = User;
