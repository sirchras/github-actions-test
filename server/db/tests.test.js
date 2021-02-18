const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./tests')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('listTests', () => {
  it('returns the list of tests', () => {
    return db.listTests(testDb)
      .then(testData => {
        expect(testData).toHaveLength(3)
        expect(testData[0]).toHaveProperty('name')
        expect(testData[1].name).toBe('test2')
        return null
      })
  })
})
