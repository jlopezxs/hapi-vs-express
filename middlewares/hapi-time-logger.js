exports.plugin = {
    name: 'hapi-time-logger',
    register: (server, options) => {
        server.ext('onPreHandler', (request, h) => {
            console.log('Time:', Date.now());
            return h.continue;
        });
    }
};