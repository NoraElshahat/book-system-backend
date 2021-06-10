const express = require('express');
const {
  addUser,
  userLogin,
  userProfile,
} = require('../controller/userController');
const router = express.Router();

router.post('/add-user', addUser);
router.post('/user-login', userLogin);
router.get('/profile', userProfile);

module.exports = router;
