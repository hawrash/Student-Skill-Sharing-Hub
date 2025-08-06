const request = require('supertest');
const express = require('express');
const jwt = require('jsonwebtoken');
const { auth } = require('../middleware/authMiddleware'); // Adjust path as needed
require('dotenv').config({ path: '.env.test' }); // Make sure JWT_SECRET is in this file

const app = express();
app.use(express.json());

// Create a dummy protected route
app.get('/protected', auth, (req, res) => {
  res.status(200).json({ message: 'Access granted', user: req.user });
});

describe('Auth Middleware', () => {
  const validPayload = { id: 'abc123', role: 'teacher', name: 'Test User' };
  const validToken = jwt.sign(validPayload, process.env.JWT_SECRET);

  it('should allow access with valid token', async () => {
    const res = await request(app)
      .get('/protected')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Access granted');
    expect(res.body.user.id).toBe(validPayload.id);
  });

  it('should deny access with missing token', async () => {
    const res = await request(app).get('/protected');

    expect(res.statusCode).toBe(401);
    expect(res.text).toBe('Access denied. No token provided.');
  });

  it('should deny access with invalid token', async () => {
    const res = await request(app)
      .get('/protected')
      .set('Authorization', 'Bearer badtoken');

    expect(res.statusCode).toBe(401);
    expect(res.text).toBe('Invalid token.');
  });
});
