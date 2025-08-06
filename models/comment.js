const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  reply: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }, // For nested comments
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
