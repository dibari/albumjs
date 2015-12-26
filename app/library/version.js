/**
 *	Version Library
 */
(function () {
	"use strict";

	module.exports = {

	   /**
		*	Return version number from URL
		*
		*	@param uri
		*
		*	@return versionNumber
		*	
		*/
		getVersion : function (uri) {
			var segments = uri.split('/');

			if (segments.length > 0) {
				return parseFloat(segments[1]).toFixed(1);
			}
			else {
				return null;
			}
		},

	   /**
		*	Ensure version number is valid
		*
		*	@param version[] An array of valid version numbers
		*	@param req
		*	@param res
		*	@param next
		*	
		*/
		validate : function (version, req, res, next) {
			var i = 0,
				uriVersion = this.getVersion(req.path());

			// Convert int (1) back to float (1.0)

				for ( ; i < version.length; i++) {
					if (version[i] % 1 === 0) {
						version[i] = parseFloat(version[i]).toFixed(1);
					}
				}

			// Validate uriVersion

				if (typeof uriVersion === 'undefined' || uriVersion === null || version.indexOf(uriVersion) == -1) {
					res.send(400, {'message' : 'API version is not supported'});
					return next();
				}
		}
	};
}());