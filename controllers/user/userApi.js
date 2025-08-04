const User = require('../../controllers/user/userData');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });

module.exports = {
  register: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });

      const newUser = await User.create({ name, email, password, role });

      const token = generateToken(newUser._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: 86400000 });
      res.status(201).json({ message: 'User registered', user: newUser });
    } catch (err) {
      res.status(500).json({ message: 'Registration failed', error: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user || !(await user.matchPassword(password)))
        return res.status(401).json({ message: 'Invalid credentials' });

      const token = generateToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: 86400000 });
      res.json({ message: 'Login successful', user });
    } catch (err) {
      res.status(500).json({ message: 'Login failed', error: err.message });
    }
  },

  logout: (req, res) => {
    res.clearCookie('jwt');
    res.json({ message: 'Logged out' });
  },

  getProfile: async (req, res) => {
    res.json(req.user); // req.user was set in protect middleware
  }
};
