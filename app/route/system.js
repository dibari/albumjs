/**
 *	System Routes
 */
(function () {
	"use strict";

	var controller = {
			system		: require('../controller/system.js')
		};

	module.exports = {

	   /**
		* 	Init routes
		*
		*	@param server
		*
		*/
		init : function(server) {

		   /**
			* 	@api {get} /:versionNumber/system Service Health
			*	@apiVersion 1.0.0
			*	@apiName ServiceHealth
			*	@apiGroup System
			*	@apiDescription Indicates if system and database are available
			*
			*	@apiUse VersionNumber
			*
			*/
			server.get('/[(0-9)+].[(0-9)]/system', function (req, res, next) {
				controller.system.health(req, res, next);
			});

		}
	};

}());