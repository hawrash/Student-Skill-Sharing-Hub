const request = require('supertest');
const app = require('../app');

describe('Integration Test', () => {
  it('should register and then login a user', async () => {
    const register = await request(app)
      .post('/api/users')
      .send({
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'pass123',
        role: 'teacher'
      });

    expect(register.statusCode).toBe(201);

    const login = await request(app)
      .post('/api/users/login')
      .send({
        email: 'jane@example.com',
        password: 'pass123'
      });

    expect(login.statusCode).toBe(200);
    expect(login.body).toHaveProperty('token');
  });
});
