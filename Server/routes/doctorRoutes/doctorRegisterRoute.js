const express = require('express');
const router = express.Router();
const {doctorRegister} = require('../../controllers/doctorController');

router.post('/', doctorRegister);

module.exports = router;