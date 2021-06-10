const Likes = require('../models/likes');
const { ErrorHandler } = require('../helpers/error');

//add new Likes
const addLike = async (req, res, next) => {
  const Liked = await new Likes(req.body);
  try {
    await Liked.save();
    if (!Object.keys(Liked).length == 0) {
      return res.status(200).send({
        data: Liked,
      });
    } else {
      throw new ErrorHandler(400, "Review Can't be added");
    }
  } catch (error) {
    next(error);
  }
};

//list Likes
const getLikes = async (req, res, next) => {
  try {
    const Likes = await Likes.find({}).populate('user_id');
    console.log(Likes);
    if (!Likes.length == 0) {
      return res.status(200).send({ data: Likes });
    } else {
      throw new ErrorHandler(400, 'Something Went Wrong');
    }
  } catch (error) {
    next(error);
  }
};

// update a Likes
const updateLikes = async (req, res, next) => {
  const id = req.params.id;
  try {
    const newData = req.body;
    const updatedLikes = await Likes.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!Object.keys(updatedLikes) == 0) {
      return res.status(200).send({ data: updatedLikes });
    } else {
      throw new ErrorHandler(400, "can't updated");
    }
  } catch (error) {
    next(error);
  }
};

//delete Likes
const deleteLikes = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedLikes = await Likes.findByIdAndDelete({ _id: id });
    if (deletedLikes) {
      return res.status(200).send({
        deletedLikes: deletedLikes,
      });
    } else {
      throw new ErrorHandler(400, "can't delete this Like");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addLike,
  getLikes,
  updateLikes,
  deleteLikes,
};
