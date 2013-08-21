var request = require('supertest')
  , assert = require('assert')
	, app = require('../.');

describe('given we have a valid image', function () {

	describe('when trying to scale it', function () {

		it('then should give us a response with the scaled image', function (done) {

			request(app)
				.post('/image/scale')
				.field('height','.5')
				.field('width','.5')
				.attach('image',__dirname+'/fixtures/meat.jpg')
				.expect('Content-Type','image/jpeg')
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});

		});

	});

});

describe('given we have an invalid image', function () {

	describe('when trying to scale it', function () {

		it('then should give us an error in response', function (done) {

			request(app)
				.post('/image/scale')
				.field('height','.5')
				.field('width','.5')
				.attach('image',__dirname+'/fixtures/duck.bmp')
				.expect('Content-Type','text/plain')
				.expect(415)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});

		});

	});

});

describe('given we do not have an image', function () {
	
	describe('when trying to scale it', function () {
		
		it('then should give us an error', function (done) {

			request(app)
				.post('/image/scale')
				.field('height','.5')
				.field('width','.5')
				.expect('Content-Type','text/plain')
				.expect(400)
				.end(function (err, res) {
					if (err) return done(err);
					done();
				});

		});

	});

});
