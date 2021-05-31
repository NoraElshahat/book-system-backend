const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { handleError } = require('./src/helpers/error');
require('./src/db/mongoose');

const bookRouter = require('./src/router/books');
app.use(cors());

//body parser to convert request body to json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use router of books
app.use(bookRouter);

// middleware of central error handling
app.use((err, req, res, next) => {
  //   console.log('hi error', err.message, err.statusCode);
  handleError(err, res);
  next();
});

//server listen
app.listen(5000, () => {
  console.log('Server is listening');
});
