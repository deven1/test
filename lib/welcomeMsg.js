function welcomeMsg(req, res, next) {
  if (req.session.visited) {
    req.body.msg = 'Hi again!';
  } else {
    req.session.visited = true;
    req.body.msg = 'Welcome to our kingdom!';
  }
  next();
}

module.exports = welcomeMsg;
