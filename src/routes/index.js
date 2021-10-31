const routes = require('express').Router();

const signUp = require('./sign-up');

routes.use(signUp)

module.exports = routes;