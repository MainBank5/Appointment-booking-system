const express = require('express');
const router = express.Router();
const {handleReview} = require('../controllers/reviewsController');

router.post('/:id', handleReview);

module.exports = router;
 