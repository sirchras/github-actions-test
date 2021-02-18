import request from 'supertest'

import server from '../server'
import { listTests } from '../db/tests'

jest.mock('../db/tests')

describe('GET /api/v1/tests', () => {
  it('responds with tests array on listTests success', () => {
    listTests.mockImplementation(() => Promise.resolve([
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' }
    ]))
    return request(server)
      .get('/api/v1/tests')
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(2)
        expect(body[1].name).toBe('test2')
        return null
      })
  })
  it('responds with status 500 on listTests rejection', () => {
    listTests.mockImplementation(() => Promise.reject(new Error('DB error')))
    return request(server)
      .get('/api/v1/tests')
      .expect(500)
      .then(err => {
        expect(err.text).toBe('DB error')
        return null
      })
  })
})
