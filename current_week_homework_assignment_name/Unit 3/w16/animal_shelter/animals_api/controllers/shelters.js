const express = require('express')
const shelters = express.Router()
const Shelter = require('../models/shelters.js')

// INDEX
shelters.get('/', (req, res) => {
    Shelter.find({}, (err, foundShelters) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundShelters)
    })
  })

// CREATE
shelters.post('/', (req, res) => {
  Shelter.create(req.body, (error, createdShelter) => {
    if (error) {
      res.status(400).json({ error: error.message })
    }
    res.status(200).json(createdShelter) //  .json() will send proper headers in response so client knows it's json coming back
  })
})

//   DELETE
shelters.delete('/:id', (req, res) => {
    Shelter.findByIdAndRemove(req.params.id, (err, deletedShelter) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedShelter)
    })
  })


//   UPDATE
shelters.put('/:id', (req, res) => {
    Shelter.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedShelter) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedShelter)
    })
  })


module.exports = shelters