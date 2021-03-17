const express = require('express')
const ticket = require('../models/ticket')
const router = express.Router()
const Ticket = require('../models/ticket')

//getting all
router.get('/', async (req,res) => {
  try {
    const tickets = await Ticket.find()
    res.send(tickets)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

//getting one
router.get('/:id', getTicket,  (req,res) => {
  res.send(res.ticket)
}
)
//creating one
router.post('/', async (req, res) => {
  const ticket = new Ticket({
    artist: req.body.artist,
    location: req.body.location
  })
  try {
    const newTicket = await ticket.save(ticket)
    res.status(201).json(newTicket)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

//updating one
router.patch('/:id', getTicket, async (req,res) => {
  if(req.body.artist != null){
    res.ticket.artist = req.body.artist
  }
  if(req.body.location != null){
    res.ticket.location = req.body.location
  }
  try {
    const updatedTicket = await res.ticket.save()
    res.json(updatedTicket)
  } catch (error) {
    res.status(400).json({message: error.message})
    
  }
})

//deleting one
router.delete('/:id', getTicket, async (req,res) => {
  try {
    await res.ticket.remove()
    res.json({message: 'Deleted ticket'})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

async function getTicket(req, res, next) {
  let ticket
  try {
    ticket = await Ticket.findById(req.params.id)
    if (ticket == null){
      return res.status(404).json({message: 'Cannot find ticket'})
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
  res.ticket = ticket
  next()
}

module.exports = router