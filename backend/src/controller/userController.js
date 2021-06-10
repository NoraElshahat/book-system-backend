const User = require('../models/user');
const { ErrorHandler } = require('../helpers/error');
const bcrypt = require('bcrypt');

// user registration
const addUser = async (req, res, next) => {
  const userAdded = await new User(req.body);
  const salt = await bcrypt.genSalt(10);

  try {
    userAdded.password = await bcrypt.hash(userAdded.password, salt);
    console.log(userAdded);
    await userAdded.save();
    if (!Object.keys(userAdded).length == 0) {
      return res.status(200).send({
        data: userAdded,
      });
    } else {
      throw new ErrorHandler(400, "Book Can't be added");
    }
  } catch (error) {
    next(error);
  }
};

//login user
const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const findUserWithEmail = await User.findOne({ email });
    if (!Object.keys(findUserWithEmail) == 0) {
      const vaildPassword = await bcrypt.compare(
        password,
        findUserWithEmail.password
      );
      if (vaildPassword) {
        return res
          .status(200)
          .send({ message: 'Valid password', data: findUserWithEmail });
      } else {
        throw new ErrorHandler(400, 'Invalid Password');
      }
    } else {
      throw new ErrorHandler(400, "this email doesn't exist");
    }
  } catch (error) {
    next(error);
  }
};

//profile user
const userProfile = async (req, res) => {
  res.send('user profile');
};

//when user liked a specific book
// const likedBook = async (req, res) => {
//   const liked = req.liked;
//   const BookId = req.params.id;
//   if (liked) {

//   }
// };
module.exports = {
  addUser,
  userLogin,
  userProfile,
};
