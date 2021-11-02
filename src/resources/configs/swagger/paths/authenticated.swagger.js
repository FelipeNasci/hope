const paths = {
  '/authenticated-route': {
    post: {
      summary: 'Authenticated route',
      description: 'Route for logged user',
      tags: ['Authenticated'],
      security: [{ bearerAuth: [] }, { AccountId: [] }],


      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/Authenticated',
              },
            },
          },
        },
        400: {
          $ref: '#/components/responses/BadRequest',
        },
        401: {
          $ref: '#/components/responses/UnauthorizedError',
        },
      },
    },
  },
};

const schemas = {
  Authenticated: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
      },
    },
  },
};

module.exports = {
  paths,
  schemas,
};
