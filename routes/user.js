const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const bruteForce = require('../middleware/brute')

router.post('/signup',bruteForce, userCtrl.signup)
router.post('/login',bruteForce, userCtrl.login)

module.exports = router