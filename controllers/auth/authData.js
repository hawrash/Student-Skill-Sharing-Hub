const User = require('../../controllers/user/userData');
module.exports = {
  findUserByEmail(email) {
    return User.findOne({ email });
  },

  createUser(userData) {
    return User.create(userData);
  }
};
