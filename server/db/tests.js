const connection = require('./connection')

module.exports = {
  listTests
}

function listTests (db = connection) {
  return db('tests').select()
}
