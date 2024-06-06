const express = require('express');
const router = express.Router();
const {updateDoctor} = require('../../controllers/doctorController');

router.put( '/:id', updateDoctor)

module.exports = router
