/**
 *	Image Controller
 */
(function () {
	"use strict";

	var library = {
			version		: require('../library/version.js')
		};

	module.exports = {

	   /**
		*	Add image to library
		*
		*	@param req
		*		@param uriVersion
		*		@param image
		*	@param res
		*	@param next
		*
		*/
		add : function(req, res, next) {
			library.version.validate([1.0], req, res, next);

			validateAdd(req, res, next);

			res.send(200, {message: 'Upload image'});
			return next();
		}

	};

   /**
	*	Validation
	*
	*	@param req
	*	@param res
	*	@param next
	*
	*/

	   /**
	 	*	Add Image
	 	*/
		function validateAdd(req, res, next) {
			if (typeof req.image !== 'String') {
				res.send(400, {message: 'Image data missing'});
				return next();
			}
		}

}());
