/**
 *	@apiDefine VersionNumber
 *	@apiParam {Decimal} versionNumber The version number of this API to use, passed as the first URI parameter
 */

/**
 *	@apiDefine Error
 *	@apiError {String} message Human-readable error message, along with appropriate HTTP status code
 */
(function () {
	"use strict";

	var config = require('../config.js'),
		restify = require('restify'),
		server = restify.createServer({
			name		: 'albumjs',
			version		: '0.0.1'
		}),
		library = {
			logging		: require('./library/logging.js')
		},
		route = {
			system		: require('./route/system.js')
		};

	   /**
		*	Config
		*/

			server.pre(restify.pre.sanitizePath());
			server.use(restify.acceptParser(server.acceptable));
			server.use(restify.queryParser());
			server.use(restify.gzipResponse());
			server.use(restify.urlEncodedBodyParser({
				maxBodySize	: 50000000
			}));

			if (process.env.ENV_VARIABLE == 'development') {

			}
			else {

			}

	   /**
		*	Pre-request handling
		*/

			server.pre(function (req, res, next) {
				library.logging.info(req.url);
				next();
			});

	   /**
		*	Routes
		*/

			route.system.init(server);

	   /**
		*	Start Server
		*/

			server.listen(config.port, function () {
				console.log('%s albumjs listening at %s', server.name, server.url);
			});
}());