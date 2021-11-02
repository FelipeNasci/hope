const AccountSwagger = require('./paths/accounts.swagger');
const Authenticated = require('./paths/authenticated.swagger');

module.exports = {
  openapi: '3.0.3',
  info: {
    title: 'Hope API',
    description: 'Correct uses of Hope RestAPI',
    contact: {
      name: 'felipeNasci',
      url: 'http://github.com/felipenasci',
      email: 'dfnascimento@live.com',
    },
    license: {
      name: 'MIT',
      url: 'http://escolhaumalicenca.com.br/licencas/mit/',
    },
    version: '0.0.1',
  },
  servers: [
    {
      url: 'http://localhost:3005',
      description: 'Local development',
    },
    {
      url: 'https://lavid-hope-backend.herokuapp.com/',
      description: 'Remote development',
    },
  ],
  paths: {
    ...AccountSwagger.paths,
    ...Authenticated.paths,
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        id: 'account_key',
        in: 'header',
      },
      AccountId:{
        type:'apiKey',
        in: 'header',
        name: 'id'
      }
    },
    responses: {
      OK: { description: 'OK' },
      UnauthorizedError: { description: 'Access token is missing or invalid' },
      BadRequest: { description: 'Bad Request' },
    },
    schemas: {
      ...AccountSwagger.schemas,
      ...Authenticated.schemas,
    },
  },
};
