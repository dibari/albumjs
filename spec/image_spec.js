var config = require('./config.js');

/**
 *	Test Image Upload
 */

	config.frisby.create('Test image upload - Image data missing')
		.post(config.domain + '/1.0/image')
		.expectJSON({
			message	: 'Image data missing'
		})
		.expectStatus(400)
	.toss();
