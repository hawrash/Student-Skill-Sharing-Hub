const Student = require('../student');

module.exports = {
  findAll: () => Student.find(),
  findById: (id) => Student.findById(id),
  create: (studentData) => new Student(studentData).save(),
  updateById: (id, updateData) => 
    Student.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }),
  deleteById: (id) => Student.findByIdAndDelete(id),
};
