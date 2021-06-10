const {
  addBook,
  getBooks,
  updateBooks,
  deleteBook,
  findOneBook,
} = require('../controller/booksController');
const express = require('express');
const router = express.Router();

router.post('/add-book', addBook);
router.get('/books', getBooks);
router.patch('/book/:id', updateBooks);
router.delete('/book/:id', deleteBook);
router.get('/:id', findOneBook);

module.exports = router;
