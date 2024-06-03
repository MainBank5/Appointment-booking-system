const express = require('express');
const router = express.Router();
const {updateUserDetails} = require('../../controllers/userController')

router.route('/').put(updateUserDetails)

module.exports = router