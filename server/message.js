const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  id: String,
  channelID: String,
  text: String,
  user: Object,
  time: String
});



const Message = mongoose.model('Message', messageSchema);
module.exports = {Message}
