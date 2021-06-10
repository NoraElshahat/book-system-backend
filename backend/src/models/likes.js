const mongoose = require('mongoose');

const LikesSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
  liked: {
    type: Boolean,
    default: false,
  },
});

const Likes = mongoose.model('Likes', LikesSchema);
module.exports = Likes;
