'use strict';

module.exports = function (grunt) {
	var pkg = require('../package.json');

	grunt.registerMultiTask('sassGlobber', pkg.description, function () {
		var sassGlobbing = require('sass-globber');

		var options = this.options({
			sassRoot: 'resources/scss',
			source: 'styles.scss',
			output: 'styles.tmp.scss'
		});

		var done = this.async();

		sassGlobbing.compiled(options, function () {
			done();
		});

	});
};