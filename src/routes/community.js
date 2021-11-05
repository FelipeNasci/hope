const routes = require('express').Router();
const Community = require('../controllers/community/community-controller');
const authentication = require('../middlewares/auth');

routes.get('/community/:id', authentication, async (req, res) => {
  const community = await Community.read(req.params.id);
  res.status(200).json(community);
});

routes.post('/community', authentication, async (req, res) => {
  const community = await Community.create({
    name: req.body.name,
    ownerId: req.headers.id,
  });
  res.status(201).json(community);
});

routes.get('/communities', authentication, async (req, res) => {
  const communities = await Community.list(req.query);
  res.status(200).json(communities);
});

routes.patch('/community/:id/member', authentication, async (req, res) => {
  const communities = await Community.addNewMember(req.params.id, req.body);
  res.status(200).json(communities);
});

module.exports = routes;
