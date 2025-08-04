module.exports = {
  renderHome(req, res) {
    res.render('home');
  },

  renderLogin(req, res) {
    res.render('../../views/auth/SingIn.jsx');
  },

  renderDashboard(req, res) {
    res.render('dashboard');
  }
};
