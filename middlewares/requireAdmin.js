const cookie_parser = require('cookie-parser');

module.exports = (req, res, next) => {
  if (req.cookies.auth && req.cookies.auth == 'qazwsxcv')
    next();
  else
    res.status(403).send();
};
