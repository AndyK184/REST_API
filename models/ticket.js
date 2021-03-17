const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  purchaseDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Ticket', ticketSchema)