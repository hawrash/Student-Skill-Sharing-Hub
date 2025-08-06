test('should register a user', async () => {
  const res = await request(app).post('/auth/register').send({
    name: 'Test',
    email: 'test@example.com',
    password: 'pass123'
  });
  expect(res.statusCode).toBe(302); // You should be redirected
});
