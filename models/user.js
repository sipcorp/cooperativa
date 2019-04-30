// const mongoose = require('mongoose');
// const { Schema } = mongoose;
// const bcrypt = require('bcryptjs');

// const UserSchema = new Schema({
//   userCode: { type: String, unique: true, required: true },
//   fullName: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   date: { type: Date, default: Date.now },
//   role: { type: String, required: true },
//   lastLogin: { type: Date, required: false }
// }, { collection: 'user' });

// UserSchema.methods.comparePassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };

// UserSchema.methods.toJSON = function () {
//   var obj = this.toObject();
//   delete obj.password;
//   return obj;
// }
// module.exports = mongoose.model('User', UserSchema);



const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {
  Schema
} = mongoose;

const userSchema = new Schema({
  name: String,
  password: String
});

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', userSchema);