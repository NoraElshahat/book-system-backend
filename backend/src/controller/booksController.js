const Book = require('../models/books');
const { ErrorHandler } = require('../helpers/error');

//add new book
const addBook = async (req, res, next) => {
  const newBook = await new Book(req.body);
  try {
    await newBook.save();
    if (!Object.keys(newBook).length == 0) {
      console.log('Saveeeed');
      return res.status(200).send({
        message: 'success',
        data: newBook,
      });
    } else {
      console.log('Errroooorrr');
      throw new ErrorHandler(400, "Book Can't be added");
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addBook,
};
