const supertest = require('supertest')
const {app, server} = require('../api/index')

const api = supertest(app)

const initialUsers = [
  

test('user are returned as json', async () => {
    await api
      .get('/api/user')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    
})

test('there are two users', async () => {
  const response = await api
    .get('/api/user')

  expect(response.body.body).toHaveLength(5)
})

afterAll(() => {
  server.close()
})