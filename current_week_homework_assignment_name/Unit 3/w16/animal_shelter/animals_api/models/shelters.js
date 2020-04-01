const mongoose = require('mongoose')

const shelterSchema = mongoose.Schema({
    name: String,
    species: String,
    breed: String,
    image: {type: String, default: 'https://loremflickr.com/240/120'},
    age: Number,
    adopted: {type: Boolean, default: false},
    personalityTraits: [{type: String}]
  })

module.exports = mongoose.model('Shelter', shelterSchema)