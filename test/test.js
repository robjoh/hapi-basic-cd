var hapi = require('hapi'),
    Lab = require('lab'),
    lab = exports.lab = Lab.script(),
    code = require('code'),
    describe = lab.experiment,
    it = lab.it,
    before = lab.before,
    after = lab.after,
    expect = code.expect;

describe('hello service', function() {
    var server = require('../index.js');

    it('says hello', function(done) {
        var options = {
            method: 'GET',
            url: '/'
        };

        server.inject(options, function(response) {
            expect(response.statusCode).to.equal(200);
            expect(response.result).to.equal('hello');
            done();
        });
    });
});