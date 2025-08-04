const Teacher = require('../models/teacher');

describe('Teacher CRUD', () => {
  let teacherId;

  it('should create a new teacher', async () => {
    const res = await request(app)
      .post('/teachers')
      .send({ name: 'Sara', email: 'sara@example.com', expertise: ['React', 'CSS'] });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Sara');
    teacherId = res.body._id;
  });

  it('should get the created teacher', async () => {
    const res = await request(app).get(`/teachers/${teacherId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(teacherId);
  });

  it('should update the teacher', async () => {
    const res = await request(app)
      .put(`/teachers/${teacherId}`)
      .send({ name: 'Sara Updated' });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Sara Updated');
  });

  it('should delete the teacher', async () => {
    const res = await request(app).delete(`/teachers/${teacherId}`);
    expect(res.statusCode).toBe(200);
  });
});