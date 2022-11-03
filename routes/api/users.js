const express = require('express')
const userCtrl = require('../../controllers/api/users')

const router = express.Router()

// ==== POST /api/users
router.post('/', userCtrl.create)


module.exports = router;