const Book = require("../models/books");
const { ErrorHandler } = require("../helpers/error");

//add new book
const addBook = async (req, res, next) => {
  const file = req.file;
  const newBook = await new Book(req.body);
  newBook.picture = file.filename;
  try {
    if (!file) {
      throw new ErrorHandler(400, "File can't be uploaded");
    }
    await newBook.save();
    if (!Object.keys(newBook).length == 0) {
      return res.status(200).send({
        data: newBook,
      });
    } else {
      throw new ErrorHandler(400, "Book Can't be added");
    }
  } catch (error) {
    next(error);
  }
};

//get all books

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find({});
    if (books.length != 0) {
      return res.status(200).send({ data: books });
    } else {
      throw new ErrorHandler(400, "No Data Found");
    }
  } catch (error) {
    next(error);
  }
};

// update a book
const updateBooks = async (req, res, next) => {
  const id = req.params.id;
  try {
    const newData = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!Object.keys(updatedBook) == 0) {
      return res.status(200).send({ data: updatedBook });
    } else {
      throw new ErrorHandler(400, "can't updated");
    }
  } catch (error) {
    next(error);
  }
};

//delete book
const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedBook = await Book.findByIdAndDelete({ _id: id });
    if (deleteBook) {
      return res.status(200).send({
        deletedBook: deletedBook,
      });
    } else {
      throw new ErrorHandler(
        400,
        "can't delete this book because it isn't found"
      );
    }
  } catch (error) {
    next(error);
  }
};

// find one book
const findOneBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const bookFound = await Book.findById({ _id: id });
    if (!Object.keys(bookFound) == 0) {
      return res.status(200).send({
        data: bookFound,
      });
    } else {
      throw new ErrorHandler(400, "Book not Found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBook,
  getBooks,
  updateBooks,
  findOneBook,
  deleteBook,
};
