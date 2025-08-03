const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/profile', protect, userController.getUserProfile);

router.put('/:id', protect, userController.updateUser);

router.delete('/:id', protect, userController.deleteUser);

module.exports = router;