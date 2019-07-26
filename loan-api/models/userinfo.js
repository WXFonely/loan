const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userinfoSchema = new Schema({
  name: String,
  age: String,
  sex: String,
  phone: String,
  number: String,
  email: String,
  address: String,
  flag: String
})

const Userinfo = mongoose.model('userinfo', userinfoSchema);

module.exports = Userinfo;