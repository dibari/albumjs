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

			res.send(200, {message: 'Upload image'});
			return next();
		}

	};

}());
