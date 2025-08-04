module.exports = {
  renderSignup: (req, res) => {
    res.render('auth/signup');
  },

  renderLogin: (req, res) => {
    res.render('auth/signin');
  },

  renderDashboard: (req, res) => {
    const role = req.user?.role;
    if (role === 'teacher') {
      res.render('dashboard/teacher', { user: req.user });
    } else {
      res.render('dashboard/learner', { user: req.user });
    }
  }
};
