const mongoose = require('mongoose');

const ReviewsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
  review: {
    type: String,
  },
});

const Reviews = mongoose.model('Review', ReviewsSchema);
module.exports = Reviews;
