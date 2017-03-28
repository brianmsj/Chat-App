'use strict';

const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  id: String,
  channelID: String,
  text: String,
  user: Object,
  time: String
});

const channelSchema = mongoose.Schema({
  name: { type:String, unique: true },
  id: String,
  private: Boolean,
  between: Array
});


const Message = mongoose.model('Message', messageSchema);
const Channel = mongoose.model('Channel', channelSchema);
module.exports = {Message}
module.exports = {Channel}
