const express = require('express');
const router = express.Router();
const {handleUserLogout} = require('../../controllers/userController');

router.post('/', handleUserLogout)

module.exports = router;