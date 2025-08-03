const request = require('supertest');
const app = require('../app');

describe('User Routes', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'test123',
        role: 'learner'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });
});
