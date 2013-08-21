/*
 * The Image router
 */

var express = require('express')
  , router = new express.Router()
	, fs = require('fs')
	, gm = require('gm');


//TODO make this configurable
var supportedTypes = ['image/x-png', 'image/pjpeg', 'image/jpeg', 'image/png', 'image/gif']

/*
 * Bind routes to router
 */

/*
 * POST /scale
 *
 * @param (string) height: the height scale we want
 * @param (string) width: the width scale we want
 * @param (image) image: the image we want to scale
 */

router.post('/scale', function (req, res, next) {

	var height = Math.abs(parseFloat(req.param('height')) || 1)
		, width = Math.abs(parseFloat(req.param('width')) || 1)

	console.log('HERE ARE THE FILES', req.files);

	if (!req.files || !req.files.image) 
		return res	
			.set('content-type','text/plain')
			.status(400)
			.end(new Error('Need to submit an image to scale').toString());	

	var image = req.files.image;

	if (supportedTypes.indexOf(image.type) < 0) 
		return res
			.set('content-type', 'text/plain')
			.status(415)
			.end(new Error('The image type is unsupported').toString());

	if (image.size > 10000000)
		return res
			.set('content-type', 'text/plain')
			.status(413)
			.end(new Error('The image size is to large, must be less than 10mb').toString());

	gm(image.path)
		.size(function (err, size) {
			if (err)
				return res
					.set('content-type', 'text/plain')
					.status(500)
					.end(err.toString());
			res.set('Content-Type', image.type);
			this	
				.resize(size.width * width, size.height * height)
				.stream(function (err, stdout, stderr) {
					stdout.pipe(res);
					stdout.on('error', next);
				});
		});

});

/*
 * export the router as this module
 */

module.exports = router;
