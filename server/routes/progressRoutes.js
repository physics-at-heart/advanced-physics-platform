const express = require('express');
const { getUserProgress, updateProgress } = require('../controllers/progressController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, getUserProgress);
router.put('/', protect, updateProgress);

module.exports = router;
