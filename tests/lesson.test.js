test('should create a lesson', async () => {
  const res = await request(app)
    .post('/lesson')
    .send({
      topic: 'Node.js',
      date: '2025-08-07',
      description: 'Intro class',
      teacher: '12345'
    });

  expect(res.statusCode).toBe(302);
});
