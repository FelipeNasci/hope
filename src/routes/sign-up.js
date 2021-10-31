const routes = require('express').Router();

const UserController = require('../controllers/users/users-controller');

routes.post('/user', async (req, res) => {
  const user = await UserController.signUp(req.body);
  res.json(user);
});

module.exports = routes;
