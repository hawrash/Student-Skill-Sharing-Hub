const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  interests: [String],
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
