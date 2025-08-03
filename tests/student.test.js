const request = require('supertest');
const app = require('../app');

describe('Student Routes', () => {
  it('should fetch all students (lessons)', async () => {
    const res = await request(app).get('/api/student');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
