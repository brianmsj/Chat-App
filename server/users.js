const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  email: String
})


userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrpyt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
