const express = require('express');
const router = express.Router();
const {doctorLogin} = require('../../controllers/doctorController');

router.post('/', doctorLogin);

module.exports = router;