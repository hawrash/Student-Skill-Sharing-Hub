test('should create a comment', async () => {
  const res = await request(app)
    .post(`/lesson/${lessonId}/comment`)
    .send({ content: 'Great lesson!' });

  expect(res.statusCode).toBe(302);
});
