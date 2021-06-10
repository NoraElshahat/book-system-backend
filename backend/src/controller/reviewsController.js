const Reviews = require('../models/reviews');
const { ErrorHandler } = require('../helpers/error');

//add new review
const addReview = async (req, res, next) => {
  const newReview = await new Reviews(req.body);
  try {
    await newReview.save();
    if (!Object.keys(newReview).length == 0) {
      return res.status(200).send({
        data: newReview,
      });
    } else {
      throw new ErrorHandler(400, "Review Can't be added");
    }
  } catch (error) {
    next(error);
  }
};

//list reviews
const getReviews = async (req, res, next) => {
  try {
    const reviews = await Reviews.find({});
    if (!reviews.length == 0) {
      return res.status(200).send({ data: reviews });
    } else {
      throw new ErrorHandler(400, 'Something Went Wrong');
    }
  } catch (error) {
    next(error);
  }
};

// update a review
const updateReview = async (req, res, next) => {
  const id = req.params.id;
  try {
    const newData = req.body;
    const updatedReview = await Book.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!Object.keys(updatedReview) == 0) {
      return res.status(200).send({ data: updatedReview });
    } else {
      throw new ErrorHandler(400, "can't updated");
    }
  } catch (error) {
    next(error);
  }
};

//delete review
const deleteReview = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedReview = await Reviews.findByIdAndDelete({ _id: id });
    if (deletedReview) {
      return res.status(200).send({
        deletedReview: deletedReview,
      });
    } else {
      throw new ErrorHandler(400, "can't delete this Review");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addReview,
  updateReview,
  deleteReview,
  getReviews,
};
