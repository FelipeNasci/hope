const { sign, verify } = require('jsonwebtoken');
const authConfig = require('../configs/auth');

module.exports = {
  generateToken(id) {
    return sign({ id }, authConfig.secret, { expiresIn: 86400 });
  },
  
  verification(token, secret, callback) {
    return verify(token, secret, callback);
  },
};
