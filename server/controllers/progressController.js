let progressEntries = [];

const getUserProgress = async (req, res) => {
  const userProgress = progressEntries.filter(p => p.user === req.user.id);
  res.json(userProgress);
};

const updateProgress = async (req, res) => {
  const { moduleId, completedLessons, quizScore } = req.body;
  const existingIndex = progressEntries.findIndex(p => p.user === req.user.id && p.module === moduleId);
  if (existingIndex >= 0) {
    progressEntries[existingIndex] = { user: req.user.id, module: moduleId, completedLessons, quizScore, updatedAt: new Date() };
  } else {
    progressEntries.push({ user: req.user.id, module: moduleId, completedLessons, quizScore, updatedAt: new Date() });
  }
  res.json(progressEntries.find(p => p.user === req.user.id && p.module === moduleId));
};

module.exports = { getUserProgress, updateProgress };
