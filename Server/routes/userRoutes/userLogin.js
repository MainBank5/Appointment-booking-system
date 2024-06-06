const express = require('express');
const router = express.Router();
const {userLogin}= require('../../controllers/userController')

router.post('/', userLogin)

module.exports = router