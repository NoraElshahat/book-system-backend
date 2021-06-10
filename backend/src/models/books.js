const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book Title Required'],
  },
  author: {
    type: String,
    required: [true, 'Author Required'],
  },
  available: {
    type: Boolean,
    default: true,
  },

  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  picture: {
    type: String,
  },
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
