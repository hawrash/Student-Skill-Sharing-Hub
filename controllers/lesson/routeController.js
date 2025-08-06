const express = require('express');
const router = express.Router();
const { protectView } = require('../../middleware/authMiddleware');
const dataController = require('../../controllers/lesson/dataController');
const viewController = require('../../controllers/lesson/viewController');
const authController = require('../../controllers/auth/dataController');

// Teacher routes
router.get('/teacher', authController.auth, viewController.showTeacherLessons ,viewController.showTeacherLessons);
router.get('/:id/edit',  authController.auth, dataController.getLessonById, dataController.updateLesson);
router.put('/:id',  authController.auth, dataController.updateLesson, (req, res) => {
  res.redirect('/lesson/teacher');
});


// student routes
router.get('/student', authController.auth, dataController.getAvailableLessons, viewController.showAvailableLessons);

//Index

router.get('/',  authController.auth, dataController.getAvailableLessons, viewController.showAvailableLessons);

//Create lesson
router.get('/new', authController.auth, viewController.showNewForm);

//Show lesson
router.get('/new', authController.auth, viewController.showNewForm);

// Show lesson
router.get('/:id', authController.auth, dataController.getLessonById, viewController.showLesson);

// post route for creating a new lesson
router.post('/', authController.auth, dataController.create, (req, res) => {
  res.redirect(`/lesson/${res.locals.data.lesson._id}?token=${res.locals.data.token}`);
})


module.exports = router;


