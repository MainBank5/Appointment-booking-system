const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController')

router.route('/')
      .post(userController.userRegister)
      .post(userController.userLogin)
      .put(userController.handleUserLogout)

router.route('/:id').put(userController.updateUserDetails);

module.exports = router