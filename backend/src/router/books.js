const {
  addBook,
  getBooks,
  updateBooks,
  deleteBook,
  findOneBook,
} = require("../controller/booksController");
const express = require("express");
const router = express.Router();
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});
var upload = multer({ storage: storage });

router.post("/add-book", upload.single("picture"), addBook);
router.get("/books", getBooks);
router.patch("/book/:id", updateBooks);
router.delete("/book/:id", deleteBook);
router.get("/:id", findOneBook);

module.exports = router;
