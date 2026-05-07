const Progress = require('../models/Progress');

const getUserProgress = async (req, res) => {
  const progress = await Progress.find({ user: req.user._id });
  res.json(progress);
};

const updateProgress = async (req, res) => {
  const { moduleId, completedLessons, quizScore } = req.body;
  const filter = { user: req.user._id, module: moduleId };
  const update = { completedLessons, quizScore };
  const options = { upsert: true, new: true };
  const progress = await Progress.findOneAndUpdate(filter, update, options);
  res.json(progress);
};

module.exports = { getUserProgress, updateProgress };
