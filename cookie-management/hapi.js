const Hapi = require('hapi');

// Create a server
const PORT = 8000;
const server = Hapi.server({
  host: 'localhost',
  port: PORT
});

server.state('myCookies', {
  ttl: 24 * 60 * 60 * 1000,
  isSecure: false,
  encoding: 'base64json',
  path: '/',
});


// Add route  
server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, h) => {
    const { myCookies } = request.state;
    console.log(myCookies);

    return h.response('Hello World!').state('myCookies', { cookie: true });
  }
});

// Start the server  
async function start () {
  await server.start();
  console.log('Server running at:', server.info.uri);
};

start();