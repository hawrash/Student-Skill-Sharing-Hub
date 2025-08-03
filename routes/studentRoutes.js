const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');
const { protect } = require('../middleware/authMiddleware');


router.get('/', protect, studentController.getAllLessons);

router.get('/:id', protect, studentController.getLessonById);

router.post('/', protect, studentController.createLesson);

router.put('/:id', protect, studentController.updateLesson);

router.delete('/:id', protect, studentController.deleteLesson);

module.exports = router;
