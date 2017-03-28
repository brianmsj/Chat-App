const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  email: String
})


Userschema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrpyt.genSaltSync(8), null)
}

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
