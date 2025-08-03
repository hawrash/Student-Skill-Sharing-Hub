const studentData = require('./studentData');

module.exports = {
  async index(req, res) {
    try {
      const students = await studentData.findAll();
      res.render('student/index', { students });
    } catch (err) {
      res.status(500).send('Error loading students page');
    }
  },

  async show(req, res) {
    try {
      const student = await studentData.findById(req.params.id);
      if (!student) return res.status(404).send('Student not found');
      res.render('student/show', { student });
    } catch (err) {
      res.status(500).send('Error loading student page');
    }
  },

  newForm(req, res) {
    res.render('student/new');
  },

  async editForm(req, res) {
    try {
      const student = await studentData.findById(req.params.id);
      if (!student) return res.status(404).send('Student not found');
      res.render('student/edit', { student });
    } catch (err) {
      res.status(500).send('Error loading edit form');
    }
  }
};
