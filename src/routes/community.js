const routes = require('express').Router();
const Community = require('../controllers/community/community-controller');
const authentication = require('../middlewares/auth');

routes.post('/community', authentication, async (req, res) => {
  const community = await Community.create({
    name: req.body.name,
    ownerId: req.headers.id,
  });
  res.status(201).json({ community });
});

module.exports = routes;
