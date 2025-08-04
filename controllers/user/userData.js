const User = require('../../controllers/user/userData');

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },

  getUserById: async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  },

  updateUser: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  },

  deleteUser: async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  }
};
