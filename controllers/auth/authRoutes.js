const express = require('express')
const router = express.Router()
const authData = require('./authData')
const authView = require('./authView')

router.post('/', authData.createUser, authView.redirectToLogin)
router.get('/', authView.signUp) 
router.post('/login', authData.loginUser, authView.redirectToHome)
router.get('/login', authView.signIn)
router.put('/:id', authData.updateUser)
router.delete('/:id', authData.auth, authData.deleteUser)

module.exports = router