const Hapi = require('hapi');
const joi = require('joi');

// Create a server
const PORT = 8000;
const server = Hapi.server({
  host: 'localhost',
  port: PORT
});

// Add route  
server.route({
  method: 'GET',
  path: '/hello/{id}',
  handler: (request, h) => {
    const { id } = request.params;
    return `Hello ${id}!`;
  },
  config: {
    validate: {
      params: {
        id: joi.number().integer().required(),
      },
    },
  }
});

// Start the server  
async function start () {
  await server.start();
  console.log('Server running at:', server.info.uri);
};

start();