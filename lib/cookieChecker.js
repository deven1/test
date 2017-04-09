function cookieChecker(req, res, next) {
  req.cookies.username ? next() : res.redirect('/login');
}

module.exports = cookieChecker;
