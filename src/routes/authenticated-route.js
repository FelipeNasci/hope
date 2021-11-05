const routes = require('express').Router();

const authentication = require('../middlewares/auth');

routes.post('/authenticated-route', authentication, async (req, res) => {
  res.status(200).json({ status: 'authenticated' });
});

module.exports = routes;
