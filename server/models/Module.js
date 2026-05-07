const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: String,
  slug: String,
  topics: [String],
  duration: String,
  image: String
});

module.exports = mongoose.model('Module', moduleSchema);
