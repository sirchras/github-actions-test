const express = require('express')

const db = require('../db/tests')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  return db.listTests()
    .then(testData => {
      res.json(testData)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err.message)
    })
})
