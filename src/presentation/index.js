const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../resources/configs/swagger');

const account = require('./account');
const auth = require('./authenticated-route');
const community = require('./community');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.use(account);
routes.use(auth);
routes.use(community);

module.exports = routes;
