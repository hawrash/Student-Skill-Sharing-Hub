const express = require('express')
const router = express.Router()
const userApiController = require('../controllers/auth/apiController')
const userDataController = require('../controllers/auth/dataController')

// User API Routes
router.post('/users', userApiController.createUser)
router.post('/users/login', userApiController.loginUser)
router.get('/users/profile', userApiController.auth, userApiController.getProfile)
router.put('/users/:id', userApiController.auth, userApiController.updateUser)
router.delete('/users/:id', userApiController.auth, userApiController.deleteUser)



module.exports = router 