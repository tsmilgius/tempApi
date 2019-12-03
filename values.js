const express = require('express')
const router = express.Router()
const Value = require('./value')

//get all values
router.get('/', async (req, res) => {
  try {
    const values = await Value.find()
    res.json(values)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//get most recent value
router.get('/last', async (req, res) => {
  try {
    const value = await Value.find().sort({ addedDate: -1 }).limit(1)
    res.json(value)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router