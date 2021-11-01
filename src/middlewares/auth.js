const { secret } = require('../resources/configs/auth');
const { verification } = require('../resources/services/token');

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const { id } = req.headers;

  if (!id) {
    return res.status(401).json({ error: 'Operation not authorized' });
  }

  if (!authHeader && !id) {
    return res.status(401).json({ error: 'Operation not authorized' });
  }

  const parts = authHeader.split(' ');

  if (!parts.length === 2)
    return res.status(401).json({ error: 'Invalid token' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).json({ error: 'Invalid token' });

  verification(token, secret, (error, decoded) => {
    if (error) return res.status(401).json({ error: 'Invalid token' });

    if (id != decoded.id) {
      return res.status(401).json({ error: 'user unauthorized' });
    }

    return next();
  });
};

module.exports = auth;
