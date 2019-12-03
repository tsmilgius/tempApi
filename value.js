const mongoose = require('mongoose')

const valueSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  addedDate: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Value', valueSchema)