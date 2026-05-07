const express = require('express');
const { getModules, getModuleBySlug } = require('../controllers/moduleController');
const router = express.Router();

router.get('/', getModules);
router.get('/:slug', getModuleBySlug);

module.exports = router;
