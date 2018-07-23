const Hapi = require('hapi');

// Create a server
const PORT = 8000;
const server = Hapi.server({
  host: 'localhost',
  port: PORT
});

// Add route  
server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, h) => {
    return 'Hello World!';
  }
});

// Start the server  
async function start () {
  await server.register(require('./hapi-time-logger'));
  await server.start();
  console.log('Server running at:', server.info.uri);
};

start();