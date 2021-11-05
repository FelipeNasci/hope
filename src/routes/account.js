const routes = require('express').Router();

const AccountHttp = require('../presentation/account');

routes.post('/account', async (req, res) => {
  const { code, data } = await AccountHttp.signup(req.body);
  res.status(code).json(data);
});

routes.post('/account/login', async (req, res) => {
  const { code, data } = await AccountHttp.login(req.body);
  res.status(code).json(data);
});

routes.patch('/account/recover', async (req, res) => {
  const { code, data } = await AccountHttp.recoverPassword(req.body);
  res.status(code).json(data);
});

routes.patch('/account/recover/change-password', async (req, res) => {
  const { code, data } = await AccountHttp.changePasswordWithHashCode(req.body);
  res.status(code).json(data);
});

module.exports = routes;
