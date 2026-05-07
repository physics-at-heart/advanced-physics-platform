const Quiz = require('../models/Quiz');

const getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
};

const getQuizById = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
};

const submitQuiz = async (req, res) => {
  // Handle score calculation and progress update
  res.json({ message: 'Quiz submitted', score: 80 });
};

module.exports = { getQuizzes, getQuizById, submitQuiz };
