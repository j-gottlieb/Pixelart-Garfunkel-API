const mongoose = require('mongoose')

const artworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  canvas: [{
    type: String,
    required: true
  }],
  colors: [{
    type: String,
    required: true
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Artwork', artworkSchema)
