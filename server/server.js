const path = require('path')
const express = require('express')

const tests = require('./routes/tests')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/tests', tests)

module.exports = server
