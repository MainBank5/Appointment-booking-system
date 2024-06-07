const express = require('express');
const router = express.Router();
const { handleRefreshToken } = require('../../controllers/doctorRefreshController');

router.get('/', handleRefreshToken)

module.exports = router