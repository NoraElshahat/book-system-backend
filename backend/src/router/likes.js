const {
  addLike,
  getLikes,
  updateLikes,
  deleteLikes,
} = require('../controller/likesController');
const express = require('express');
const router = express.Router();

router.post('/like', addLike);
router.get('/likes', getLikes);

module.exports = router;
