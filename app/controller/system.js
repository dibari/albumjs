/**
 *	System Controller
 */
(function () {
	"use strict";

	var library = {
			version		: require('../library/version.js')
		};

	module.exports = {

	   /**
		*	Display system health
		*
		*	@param req
		*		@param uriVersion
		*	@param res
		*	@param next
		*
		*/
		health : function (req, res, next) {
			library.version.validate([1.0], req, res, next);

			res.send(200, {message: 'System health success'});
			return next();
		}

	};

}());