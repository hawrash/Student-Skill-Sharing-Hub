const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  learner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
}, { timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);
