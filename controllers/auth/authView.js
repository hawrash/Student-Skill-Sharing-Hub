module.exports = {
  renderHome(req, res) {
    res.render('home');
  },

  renderLogin(req, res) {
    res.render('auth/login');
  },

  renderDashboard(req, res) {
    res.render('dashboard');
  }
};
