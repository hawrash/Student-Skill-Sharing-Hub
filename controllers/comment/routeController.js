const express = require('express');
const router = express.Router();

const data = require('./dataController');
const view = require('./viewController');

// Index
router.get('/', data.getAllComments, view.showAllComments);

// New
router.get('/new', view.showNewForm);

// Create
router.post('/', data.createComment, view.redirectToIndex);

// Show
router.get('/:id', data.getComment, view.showComment);

// Edit
router.get('/:id/edit', data.getComment, view.showEditForm);

// Update
router.put('/:id', data.updateComment, view.redirectToIndex);

// Delete
router.delete('/:id', data.deleteComment, view.redirectToIndex);

module.exports = router;
