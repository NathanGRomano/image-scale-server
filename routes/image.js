/*
 * The Image router
 */

var express = require('express')
  , router = new express.Router();

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
