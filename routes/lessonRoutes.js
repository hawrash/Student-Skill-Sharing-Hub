const express = require('express');
const router = express.Router();
const viewController = require('../controllers/lesson/viewController');
const auth = require('../controllers/auth/dataController');


router.get('/lesson', auth.auth, viewController.showTeacherLessons);

module.exports = router;
