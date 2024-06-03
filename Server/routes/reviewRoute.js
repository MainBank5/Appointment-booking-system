const express = require('express');
const router = express.Router();
const {handleReview} = require('../controllers/reviewsController');

router.post('/', handleReview);

module.exports = router;
 