var config = require('./config.js');

/**
 *	Test System
 */

	config.frisby.create('Test system endpoint')
		.get(config.domain + '/1.0/system')
		.expectStatus(200)
	.toss();