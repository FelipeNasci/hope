const routes = require('express').Router();

const AccountController = require('../controllers/account/account-controller');

routes.post('/account', async (req, res) => {
  const user = await AccountController.signup(req.body);
  res.status(201).json(user);
});

routes.post('/account/login', async (req, res) => {
  const user = await AccountController.login(req.body);
  res.status(200).json(user);
});

module.exports = routes;
