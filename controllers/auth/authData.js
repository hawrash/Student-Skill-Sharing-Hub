const User = require('../../models/user');
module.exports = {
  findUserByEmail(email) {
    return User.findOne({ email });
  },

  createUser(userData) {
    return User.create(userData);
  }
};
