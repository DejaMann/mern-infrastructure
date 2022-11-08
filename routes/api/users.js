const express = require('express')
const userCtrl = require('../../controllers/api/users')

const router = express.Router()

// ==== GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

// ==== POST /api/users
router.post('/', userCtrl.create)


module.exports = router;