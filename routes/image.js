/*
 * The Image router
 */

var express = require('express')
  , router = new express.Router()
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
		, image = req.files.image;

	if (!image) 
		return res	
			.set('content-type','text/plain')
			.status(400)
			.end(new Error('Need to submit an image to scale').toString());	

	if (supportedTypes.indexOf(image.type) < 0) 
		return res
			.set('content-type', 'text/plain')
			.status(400)
			.end(new Error('The image type is unsupported').toString());
	
	//TODO do it!
	res.status(501).end('Not Implemented!');

});

router.post('*', function (req, res, next) {

});

/*
 * export the router as this module
 */

module.exports = router;
