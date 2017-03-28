const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
    name: { type:String, unique: true },
    id: String,
});



const Channel = mongoose.model('Channel', channelSchema);
module.exports = {Channel}
