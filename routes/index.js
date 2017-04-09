const express = require("express");
const router = express.Router();

const cookieChecker = require('../lib/cookieChecker');
const welcomeMsg = require('../lib/welcomeMsg');

const { getKingdoms, makeKingdom } = require("../lib/kingdom");

router.all("/", cookieChecker, welcomeMsg);

router.get("/", (req, res) => {
  console.log(req.session);
  const username = req.cookies.username;
  const msg = req.body.msg;
  const kingdoms = getKingdoms();
  res.render("index", { username, msg, kingdoms });
});

router.post("/", (req, res) => {
  makeKingdom(req.body);
  res.redirect("/");
});

module.exports = router;
