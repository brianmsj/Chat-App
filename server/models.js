const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  users: [String],
  connections: [String]
})


















const User = mongoose.model('User', userSchema)
module.exports = {User};
