const routes = require('express').Router();

const AccountController = require('../controllers/account/account-controller');

routes.post('/account', async (req, res) => {
  const account = await AccountController.signup(req.body);
  res.status(201).json(account);
});

routes.post('/account/login', async (req, res) => {
  try {
    const account = await AccountController.login(req.body);
    res.status(200).json(account);
  } catch (error) {
    res.status(404).json(error);
  }
});

routes.post('/account/recover', async (req, res) => {
  try {
    const account = await AccountController.recoverPassword(req.body);
    res.status(200).json(account);
  } catch (error) {
    res.status(404).json({ error });
  }
});

module.exports = routes;
