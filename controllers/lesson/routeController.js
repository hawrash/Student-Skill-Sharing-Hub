const express = require('express');
const router = express.Router();

const authController = require('../../controllers/auth/dataController');
const dataController = require('../../controllers/lesson/dataController');
const viewController = require('../../controllers/lesson/viewController');


router.get('/teacher', authController.auth, dataController.getLessonsByTeacher, viewController.showTeacherLessons);

router.get('/new', authController.auth, viewController.showNewForm);

router.post('/', authController.auth, dataController.create, (req, res) => {
  const lessonId = res.locals.data.lesson._id;
  const token = res.locals.data.token || req.query.token;
  res.redirect(`/lesson/${lessonId}?token=${token}`);
});

router.get('/:id/edit', authController.auth, dataController.getLessonById, viewController.showEditForm);


router.put('/:id', authController.auth, dataController.getLessonById, dataController.updateLesson, (req, res) => {
  const token = req.query.token || res.locals.data.token;
  res.redirect(`/lesson/${req.params.id}?token=${token}`);
});

router.get('/student', authController.auth, dataController.getAvailableLessons, viewController.showAvailableLessons);


router.get('/', authController.auth, dataController.getAvailableLessons, viewController.showAvailableLessons);

router.get('/:id', authController.auth, dataController.getLessonById, viewController.showLesson);


router.delete('/:id', authController.auth, dataController.getLessonById, dataController.deleteLesson, (req, res) => {
  const token = req.query.token || res.locals.data.token;
  res.redirect(`/lesson/teacher?token=${token}`);
});

module.exports = router;
