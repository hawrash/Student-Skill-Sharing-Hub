const authData = require('./authData'); // Make sure this has findUserByEmail and createUser functions
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  async registerUser(req, res) {
    const { name, email, password, role } = req.body;
    const existingUser = await authData.findUserByEmail(email);
    if (existingUser) return res.status(400).send('Email already in use');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await authData.createUser({ name, email, password: hashedPassword, role });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET);
    res.cookie('token', token).redirect('/dashboard');
  },

  async loginUser(req, res) {
    const { email, password } = req.body;
    const user = await authData.findUserByEmail(email);
    if (!user) return res.status(401).send('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid credentials');

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET);
    res.cookie('token', token).redirect('/dashboard');
  },

  async getUserProfile(req, res) {
    // You should implement finding user by req.user.id or token data here
    res.send('User profile endpoint');
  },

  async updateUser(req, res) {
    // You should implement updating user data here
    res.send('Update user endpoint');
  },

  async deleteUser(req, res) {
    // You should implement deleting user here
    res.send('Delete user endpoint');
  },

  logout(req, res) {
    res.clearCookie('token').redirect('/login');
  }
};
