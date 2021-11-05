const routes = require('express').Router();
const Community = require('../presentation/community');
const authentication = require('../middlewares/auth');

routes.get('/community/:id', authentication, async (req, res) => {
  const { code, data } = await Community.read(req.params);
  res.status(code).json(data);
});

routes.post('/community', authentication, async (req, res) => {
  const { code, data } = await Community.create({
    name: req.body.name,
    ownerId: req.headers.id,
  });
  res.status(code).json(data);
});

routes.get('/communities', authentication, async (req, res) => {
  const { code, data } = await Community.list(req.query);
  res.status(code).json(data);
});

routes.patch('/community/:id/member', authentication, async (req, res) => {
  const { code, data } = await Community.addNewMember(req.params.id, {
    id: req.headers.id,
  });
  res.status(code).json(data);
});

module.exports = routes;
