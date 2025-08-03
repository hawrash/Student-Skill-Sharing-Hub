const React = require('react');
const DefaultLayout = require('../layouts/default');

module.exports = {
  loginForm(req, res) {
    res.render('auth/login', {});
  },

  registerForm(req, res) {
    res.render('auth/register', {});
  }
};
