/**
 *	Image Routes
 */
(function () {
	"use strict";

	var controller = {
			image		: require('../controller/image.js')
		};

	module.exports = {

	   /**
		*	Init routes
		*
		*	@param server
		*
		*/
		init : function(server) {

		   /**
			* 	@api {post} /:versionNumber/image Upload image
			*	@apiVersion 1.0.0
			*	@apiName ImageAdd
			*	@apiGroup Image
			*	@apiDescription Upload an image to the library
			*
			*	@apiUse VersionNumber
			*	@apiParam {String} image The data of the image to upload
			*
			*/
			server.post('/[(0-9)+].[(0-9)]/image', function (req, res, next) {
				controller.image.add(req, res, next);
			});

		}
	};

}());
