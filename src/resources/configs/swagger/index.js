const AccountSwagger = require('./paths/accounts.swagger')
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
    ...AccountSwagger.paths
  },
  components: {
    schemas: {
      ...AccountSwagger.schemas
    },
  },
};
