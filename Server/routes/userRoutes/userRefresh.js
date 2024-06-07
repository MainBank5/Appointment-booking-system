const express = require('express');
const router = express.Router();
const { handleRefreshToken } = require('../../controllers/refreshTokenController');

router.get('/', handleRefreshToken)

module.exports = router