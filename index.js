var hapi = require('hapi');
var server = new hapi.Server();

server.connection({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
});

server.route({
    path: '/',
    method: 'GET',
    handler: function(request, reply) {
        reply('hello');
    }
});

if (!module.parent) {
    server.start(function() {
        console.log('Server started: ' + server.info.uri);
    });
}

module.exports = server;