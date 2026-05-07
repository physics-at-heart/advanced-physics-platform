const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correct: Number
});

const quizSchema = new mongoose.Schema({
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  topic: String,
  questions: [questionSchema],
  time: Number
});

module.exports = mongoose.model('Quiz', quizSchema);
