const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  completedLessons: [Number],
  quizScore: Number,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Progress', progressSchema);
