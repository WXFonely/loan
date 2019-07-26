const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
  name: String,
  price: String,
  phone: String,
  loantime: String,
  address: String,
  flag: String,
  zhtai: String
})

const Loan = mongoose.model('loan', loanSchema);

module.exports = Loan;