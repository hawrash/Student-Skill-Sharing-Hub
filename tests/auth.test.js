describe('Auth Tests', () => {
  it('should return token on successful login', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'teacher@example.com', password: '123456' });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
