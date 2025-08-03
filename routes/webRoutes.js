const express = require('express');
const router = express.Router();
const { renderHome, renderLogin, renderDashboard } = require('../controllers/viewController');
const { protectView } = require('../middleware/authMiddleware');

router.get('/', renderHome);
router.get('/login', renderLogin);
router.get('/dashboard', protectView, renderDashboard);

module.exports = router;