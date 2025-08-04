const express = require('express');
const router = express.Router();

const userApi = require('../controllers/user/userApi');
const userData = require('../controllers/user/userData');
const userView = require('../controllers/user/userView');
const { protect } = require('../middleware/authMiddleware');

// API Routes
router.post('/api/users', userApi.register);
router.post('/api/users/login', userApi.login);
router.post('/api/users/logout', userApi.logout);
router.get('/api/users/profile', protect, userApi.getProfile);

router.get('/api/users', protect, userData.getAllUsers);
router.get('/api/users/:id', protect, userData.getUserById);
router.put('/api/users/:id', protect, userData.updateUser);
router.delete('/api/users/:id', protect, userData.deleteUser);

// View Routes
router.get('/signup', userView.renderSignup);
router.get('/login', userView.renderLogin);
router.get('/dashboard', protect, userView.renderDashboard);

module.exports = router;
