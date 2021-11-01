const jwt = require('jsonwebtoken');
const authConfig = require('../configs/auth');

module.exports = {
  generateToken(id) {
    return jwt.sign({ id }, authConfig.secret, { expiresIn: 86400 });
  },
};
