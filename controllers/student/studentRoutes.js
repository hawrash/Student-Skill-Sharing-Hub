const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/authMiddleware'); 
const studentApi = require('./studentApi');


router.get('/', protect, studentApi.getAllStudents);
router.get('/:id', protect, studentApi.getStudentById);
router.post('/', protect, studentApi.createStudent);
router.put('/:id', protect, studentApi.updateStudent);
router.delete('/:id', protect, studentApi.deleteStudent);

module.exports = router;
