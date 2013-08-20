var request = require('supertest')
  , assert = require('assert')
	, app = require('../.');
// ['image/x-png', 'image/pjpeg', 'image/jpeg', 'image/png', 'image/gif']

describe('given we have an image', function () {

	describe('when trying to scale', function () {

		it('then should give us a response with the scaled image', function (done) {

			request(app)
				.post('/image/scale')
				.expect('Content-Type','image/png')
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});

		});

	});

});

describe('given we do not have an image', function () {
	
	describe('when trying to scale', function () {
		
		it('then should give us an error', function (done) {

			request(app)
				.post('/image/scale')
				.expect('Content-Type','text/plain')
				.expect(400)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});

		});

	});

});
