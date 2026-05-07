const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  title: String,
  content: String,
  order: Number
});

module.exports = mongoose.model('Lesson', lessonSchema);
