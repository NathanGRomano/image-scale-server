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
 * @param (number) height: the height scale we want
 * @param (number) width: the width scale we want
 * @param (image) image: the image we want to scale
 */

router.post('/scale', function (req, res, next) {
	
	//TODO do it!
	res.status(501).end('Not Implemented!');

});

/*
 * export the router as this module
 */

module.exports = router;
