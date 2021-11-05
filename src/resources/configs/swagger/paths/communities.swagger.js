const paths = {
  '/communities': {
    get: {
      summary: 'List Communities',
      description: 'Get a list of communities',
      tags: ['Community'],
      security: [{ bearerAuth: [] }, { AccountId: [] }],

      responses: {
        200: {
          description: 'ok',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/CommunityList',
              },
            },
          },
        },
        400: {
          description: 'bad request',
        },
        500: {
          description: 'server error',
        },
      },
    },
  },
  '/community': {
   
    post: {
      summary: 'Community route',
      description: 'Create a community',
      tags: ['Community'],
      security: [{ bearerAuth: [] }, { AccountId: [] }],

      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Community',
            },
            examples: {
              account: {
                value: {
                  name: 'Community Name',
                  avatarUrl:
                    'https://iguatemi.com.br/jkiguatemi/sites/jkiguatemi/files/2020-07/Hope.png',
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
                $ref: '#/components/schemas/Community',
              },
            },
          },
        },
        400: {
          description: 'bad request',
        },
        500: {
          description: 'server error',
        },
      },
    },
  },
  '/community/{id}/member': {
    patch: {
      summary: 'Subscription',
      description: 'add a user on community',
      tags: ['Community'],
      security: [{ bearerAuth: [] }, { AccountId: [] }],

      parameters: [
        {
          in: 'path',
          name: 'id',
          schema: {
            type: 'uuid',
            required: 'true',
            description: 'Id of community',
          },
        },
      ],

      // requestBody: {
      //   content: {
      //     'application/json': {
      //       schema: {
      //         $ref: '#/components/schemas/Community',
      //       },
      //       examples: {
      //         community: {
      //           value: {
      //             name: 'Community Name',
      //             avatarUrl:
      //               'https://iguatemi.com.br/jkiguatemi/sites/jkiguatemi/files/2020-07/Hope.png',
      //           },
      //         },
      //       },
      //     },
      //   },
      // },

      responses: {
        201: {
          description: 'created',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/Subscription',
              },
            },
          },
        },
        400: {
          description: 'bad request',
        },
        500: {
          description: 'server error',
        },
      },
    },
  },
  '/community/{id}': {
    get: {
      summary: 'Get Community',
      description: 'read a community',
      tags: ['Community'],
      security: [{ bearerAuth: [] }, { AccountId: [] }],
      
      parameters: [
        {
          in: 'path',
          name: 'id',
          schema: {
            type: 'uuid',
            required: 'true',
            description: 'Id of community',
          },
        },
      ],

      responses: {
        200: {
          description: 'ok',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/CommunityList',
              },
            },
          },
        },
        400: {
          description: 'bad request',
        },
        500: {
          description: 'server error',
        },
      },
    },
  },
};

const schemas = {
  Community: {
    type: 'object',
    properties: {
      data: {
        id: { type: 'string' },
        name: { type: 'string' },
        owner: { type: 'string' },
        members: { type: 'Array' },
        posts: { type: 'Array' },
        created: '2021-11-05T13:52:39.437Z',
      },
    },
  },
  CommunityList: {
    type: 'array',
    properties: {
      data: [
        {
          id: { type: 'string' },
          name: { type: 'string' },
          owner: { type: 'string' },
          members: { type: 'Array' },
          posts: { type: 'Array' },
          created: '2021-11-05T13:52:39.437Z',
        },
      ],
    },
  },
  Subscription: {
    type: 'object',
    properties: {
      data: {
        success: { type: 'boolean' },
      },
    },
  },
};

module.exports = {
  paths,
  schemas,
};
