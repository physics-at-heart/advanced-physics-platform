const express = require('express');
const { getQuizzes, getQuizById, submitQuiz } = require('../controllers/quizController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.get('/', getQuizzes);
router.get('/:id', getQuizById);
router.post('/submit', protect, submitQuiz);

module.exports = router;
