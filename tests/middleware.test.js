const jwt = require('jsonwebtoken');
const { protect } = require('../middleware/authMiddleware');


const mockReq = (token) => ({ headers: { authorization: `Bearer ${token}` } });
const mockRes = {};
const mockNext = jest.fn();

describe('Middleware: protect', () => {
  it('should call next with valid token', () => {
    const token = jwt.sign({ id: 'user123' }, process.env.JWT_SECRET);
    const req = mockReq(token);

    protect(req, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalled();
  });

  it('should return error without token', () => {
    const req = { headers: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    protect(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalled();
  });
});
