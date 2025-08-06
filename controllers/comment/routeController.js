const express = require('express');
const router = express.Router({ mergeParams: true }); 
const dataController = require('./dataController');
const viewController = require('./viewController');
const authController = require('../../controllers/auth/dataController');

// New comment form
router.get('/new/:lessonId', authController.auth, viewController.showNewForm);

// Create comment
router.post('/new/:lessonId', authController.auth, dataController.createComment, viewController.redirectToIndex);

// Edit comment form
router.get('/:id/edit', dataController.getComment, viewController.showEditForm);

// Update comment
router.put('/:id', dataController.updateComment, viewController.redirectToIndex);

// Delete comment
router.delete('/:id', dataController.deleteComment, viewController.redirectToIndex);

module.exports = router;
