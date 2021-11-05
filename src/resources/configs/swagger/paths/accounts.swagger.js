const paths = {
  '/account': {
    post: {
      summary: 'Create a account',
      description: 'Create new user',
      tags: ['Accounts'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Account',
            },
            examples: {
              account: {
                value: {
                  email: 'japonesboy@hotmail.com',
                  password: 'password',
                  accountType: 'PATIENT',
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'created',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/Account',
              },
            },
          },
        },
        400: {
          description: 'bad request',
        },
        401: {
          description: 'user already exists',
        },
        500: {
          description: 'server error',
        },
      },
    },
  },
  '/account/login': {
    post: {
      summary: 'Login',
      description: 'Get authentication for access the system',
      tags: ['Accounts'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Account',
            },
            examples: {
              account: {
                value: {
                  email: 'japonesboy@hotmail.com',
                  password: 'password',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/Account',
              },
            },
          },
        },
        400: {
          description: 'bad request',
        },
        403: {
          description: 'user already exists',
        },
      },
    },
  },
  '/account/recover': {
    post: {
      summary: 'Account recovery',
      description: 'Get hash code with account recovery',
      tags: ['Accounts'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Account',
            },
            examples: {
              account: {
                value: {
                  email: 'japonesboy@hotmail.com',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/AccountRecovery',
              },
            },
          },
        },
        400: {
          description: 'bad request',
        },
        404: {
          description: 'user not found',
        },
      },
    },
  },
  '/account/recover/change-password': {
    patch: {
      summary: 'Change password',
      description: 'Change password',
      tags: ['Accounts'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Account',
            },
            examples: {
              account: {
                value: {
                  email: 'japonesboy@hotmail.com',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/ChangePassword',
              },
            },
          },
        },
        400: {
          description: 'bad request',
        },
      },
    },
  },
};

const schemas = {
  Account: {
    type: 'object',
    properties: {
      data: {
        email: {
          type: 'string',
        },
        accountType: {
          type: 'string',
          enum: ['PATIENT, SPECIALIST'],
        },
        token: {
          type: 'string',
        },
      },
    },
  },
  AccountRecovery: {
    type: 'object',
    properties: {
      data: {
        status: {
          type: 'boolean',
        },
      },
    },
  },
  ChangePassword: {
    type: 'object',
    properties: {
      data: {
        email: {
          type: 'string',
        },
        newPassword: {
          type: 'string',
        },
        hashRecover: {
          type: 'string',
        },
      },
    },
  },
};

module.exports = {
  paths,
  schemas,
};
