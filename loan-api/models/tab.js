const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tabSchema = new Schema({
  date: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String
  }
})

const Tab = mongoose.model('tab', tabSchema);

module.exports = Tab;