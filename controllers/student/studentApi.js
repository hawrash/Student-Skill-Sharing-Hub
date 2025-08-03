const studentData = require('./studentData');

module.exports = {
  async getAllStudents(req, res) {
    try {
      const students = await studentData.findAll();
      res.json(students);
    } catch (err) {
      res.status(500).json({ error: 'Server error fetching students' });
    }
  },

  async getStudentById(req, res) {
    try {
      const student = await studentData.findById(req.params.id);
      if (!student) return res.status(404).json({ error: 'Student not found' });
      res.json(student);
    } catch (err) {
      res.status(500).json({ error: 'Server error fetching student' });
    }
  },

  async createStudent(req, res) {
    try {
      const newStudent = await studentData.create(req.body);
      res.status(201).json(newStudent);
    } catch (err) {
      res.status(400).json({ error: 'Invalid student data' });
    }
  },

  async updateStudent(req, res) {
    try {
      const updatedStudent = await studentData.updateById(req.params.id, req.body);
      if (!updatedStudent) return res.status(404).json({ error: 'Student not found' });
      res.json(updatedStudent);
    } catch (err) {
      res.status(400).json({ error: 'Invalid update data' });
    }
  },

  async deleteStudent(req, res) {
    try {
      const deleted = await studentData.deleteById(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Student not found' });
      res.json({ message: 'Student deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Server error deleting student' });
    }
  }
};
