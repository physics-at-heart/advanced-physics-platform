const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: String,
  type: { type: String, enum: ['note', 'pdf', 'formula', 'guide'] },
  url: String,
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' }
});

module.exports = mongoose.model('Resource', resourceSchema);
