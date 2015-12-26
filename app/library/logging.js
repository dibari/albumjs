/**
 *	Logging Library
 */
(function () {
	"use strict";

	var bunyan = require('bunyan'),
		log = bunyan.createLogger({
			name	: 'albumJs',
			streams	: [
				{
					level	: 'info',
					stream	: process.stdout
				}
			]
		}),
		moment = require('moment');

	module.exports = {

	   /**
		*	Log info message
		*
		*	@param message
		*/
		info	: function(message) {
			console.log(moment().utc().format() + ' :: ' + message);
		},

	   /**
		*	Log warning message
		*
		*	@param message
		*/
		warn	: function(message) {
			console.error(moment().utc().format() + ' :: ' + message);
		},

	   /**
		*	Log error message
		*
		*	@param message
		*/
		error	: function(message) {
			console.error(moment().utc().format() + ' :: ' + message);
		}

	};

}());