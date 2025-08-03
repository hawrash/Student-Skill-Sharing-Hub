const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  expertise: {
    type: [String],
    default: []
  },
  bio: {
    type: String
  },
  availableTimes: {
    type: [String], // Example: ['Mon 10-12', 'Wed 14-16']
    default: []
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Teacher', teacherSchema);
