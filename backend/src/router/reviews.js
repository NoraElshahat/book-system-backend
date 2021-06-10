const {
  addReview,
  updateReview,
  deleteReview,
  getReviews,
} = require('../controller/reviewsController');
const express = require('express');
const router = express.Router();

router.post('/add-review', addReview);
router.get('/reviews', getReviews);
router.patch('/review/:id', updateReview);
router.delete('/review/:id', deleteReview);

module.exports = router;
