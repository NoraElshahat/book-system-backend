const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { handleError } = require('./src/helpers/error');
require('./src/db/mongoose');

const bookRouter = require('./src/router/books');
const userRouter = require('./src/router/user');
const reviewsRouter = require('./src/router/reviews');
const likesRouter = require('./src/router/likes');
app.use(cors());

//body parser to convert request body to json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use router of books
app.use('/books', bookRouter);

//use router of user
app.use('/users', userRouter);

//use router of reviews
app.use('/reviews', reviewsRouter);
//use of like
app.use('/likes', likesRouter);

// middleware of central error handling
app.use((err, req, res, next) => {
  handleError(err, res);
  next();
});

//server listen
app.listen(5000, () => {
  console.log('Server is listening');
});
