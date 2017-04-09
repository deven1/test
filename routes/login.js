const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  if (req.body.username && req.body.username.length) {
    res.cookie("username", req.body.username);
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
