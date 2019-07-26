const mongoose = require('mongoose');

const User = require('./user')
const Loan = require('./loan');
const Userinfo = require('./userinfo')
const Tab = require('./tab');
mongoose.connect('mongodb://localhost:27017/daikuan', {
  useNewUrlParser: true
});

module.exports = {
  User,
  Loan,
  Userinfo,
  Tab
}