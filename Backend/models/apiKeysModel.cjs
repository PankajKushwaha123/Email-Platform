const mongoose = require('mongoose');
const { Schema } = mongoose;

const apiKeysSchema = new mongoose.Schema({
  user_id: String,
  key_name: String,
  api_key: String,
  api_secret: String,
}, { timestamps: true });


const APIKeys = mongoose.model('APIKeys', apiKeysSchema);
module.exports = APIKeys;
