const express = require('express');
const router = express.Router();
const authApi = require('../controllers/auth/authApi');
const authView = require('../views/auth/authView');

// Auth views
router.get('/login', authView.loginForm);
router.get('/register', authView.registerForm);

// Auth actions
router.post('/login', authApi.login);
router.post('/register', authApi.register);
router.get('/logout', authApi.logout);

module.exports = router;
