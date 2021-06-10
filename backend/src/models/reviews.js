const mongoose = require('mongoose');

const ReviewsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
  review: {
    type: String,
  },
});

const Reviews = mongoose.model('Review', ReviewsSchema);
module.exports = Reviews;
