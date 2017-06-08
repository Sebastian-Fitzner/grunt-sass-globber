var fs = require('fs');
var path = require('path');

'use strict';

module.exports = function (grunt) {
	var pkg = require('../package.json');

	grunt.registerMultiTask('sassGlobber', pkg.description, function () {
		var sassGlobbing = require('sass-globber');
		var done = this.async();
		var dest;
		var src;
		var options;
		var that = this;

		var compileFile = function(src, dest) {
			var options = that.options({
				sassRoot: 'resources/scss',
				source: src,
				output: dest,
				watch: false
			});

			sassGlobbing.compiled(options, function () {
				done();
			});
		};

		if (this.files && this.files.length) {
			this.files.forEach(function (file) {

				if (file.orig.src.length !== 1) {
					grunt.fail.warn('This Grunt plugin does not support multiple source files.');
				}

				src = file.orig.src[0];
				dest = file.dest;

				if (!fs.existsSync(path.join(process.cwd(), that.options().sassRoot, file.orig.src[0]))) {
					grunt.fatal('Source file "' + src + '" not found.');
				}

				compileFile(src, dest);
			});
		} else {
			src = 'styles.scss';
			dest = 'styles.tmp.scss';

			compileFile(src, dest);
		}

	});
};