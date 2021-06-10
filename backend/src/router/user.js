const express = require('express');
const {
  addUser,
  userLogin,
  userProfile,
  getUsers,
} = require('../controller/userController');
const router = express.Router();

router.post('/add-user', addUser);
router.post('/user-login', userLogin);
router.get('/profile', userProfile);
router.get('/all-users', getUsers);

module.exports = router;
