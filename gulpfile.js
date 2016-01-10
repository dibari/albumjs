var gulp = require('gulp'),
	apidoc = require('gulp-apidoc'),
	config = require('./config.js'),
	jshint = require('gulp-jshint'),
	runSequence = require('run-sequence'),
	shell = require('gulp-shell');

   /**
	*	Testing and documentation
	*/

	   /**
		*	CSS, HTML, JavaScript Lint
		*/
		gulp.task('lint', function() {
			gulp.src([
				'./app/**/*.js',
				'./spec/**/*.js'
			])
			.pipe(jshint({
				esnext			: true,
				loopfunc		: true,
				maxparams		: 4,
				multistr		: true,
				newcap			: false,
				sub				: false
			}))
			.pipe(jshint.reporter('default'));
		});

	   /**
		*	Generate documentation for API
		*/
		gulp.task('documentation', function(){
			apidoc.exec({
				src		: "app",
				dest	: "api_documentation/",
				debug	: true
			});
		});

	   /**
		*	Execute API endpoint tests
		*/
		gulp.task('test', function(callback) {
			runSequence(
				'testImage',
				'testSystem',
				callback
			);
		});

			gulp.task('testImage', shell.task([
				'jasmine-node spec/image_spec.js'
			]));
			gulp.task('testSystem', shell.task([
				'jasmine-node spec/system_spec.js'
			]));