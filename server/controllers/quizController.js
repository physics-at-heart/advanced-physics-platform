// In-memory quiz data (same as static frontend quizzes)
const quizzes = [
  {
    _id: 'q1',
    moduleId: 'module1',
    topic: 'Work Done',
    questions: [
      { question: 'What is the formula for work done?', options: ['W = F x d', 'W = m x g', 'W = P x t', 'W = 1/2 m v²'], correct: 0 },
      { question: 'Unit of work is:', options: ['Joule', 'Newton', 'Watt', 'Pascal'], correct: 0 }
    ],
    time: 120
  }
];

// In-memory quiz results
let results = [];

const getQuizzes = async (req, res) => {
  res.json(quizzes);
};

const getQuizById = async (req, res) => {
  const quiz = quizzes.find(q => q._id === req.params.id);
  if (quiz) res.json(quiz);
  else res.status(404).json({ message: 'Quiz not found' });
};

const submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;
  const quiz = quizzes.find(q => q._id === quizId);
  if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

  let score = 0;
  quiz.questions.forEach((q, index) => {
    if (answers[index] === q.correct) score++;
  });

  results.push({
    user: req.user.id,
    quizId,
    score,
    total: quiz.questions.length
  });

  res.json({ score, total: quiz.questions.length, message: 'Quiz submitted' });
};

module.exports = { getQuizzes, getQuizById, submitQuiz };
