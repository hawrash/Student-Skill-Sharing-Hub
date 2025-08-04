const mongoose = require('mongoose');
const Student = require('../models/student');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Student CRUD', () => {
  let studentId;

  it('should create a new student', async () => {
    const res = await request(app)
      .post('/students')
      .send({ name: 'Ali', email: 'ali@example.com', skills: ['Node', 'Mongo'] });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Ali');
    studentId = res.body._id;
  });

  it('should get the created student', async () => {
    const res = await request(app).get(`/students/${studentId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(studentId);
  });

  it('should update the student', async () => {
    const res = await request(app)
      .put(`/students/${studentId}`)
      .send({ name: 'Ali Updated' });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Ali Updated');
  });

  it('should delete the student', async () => {
    const res = await request(app).delete(`/students/${studentId}`);
    expect(res.statusCode).toBe(200);
  });
});