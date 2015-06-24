module.exports = function (grunt) {

	'use strict';

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		clean: {
			tests: ['tmp']
		},

		sassGlobber: {
			options: {
				sassRoot: 'tmp/sass'
			},

			dev: {
				options: {
					source: 'styles.scss',
					output: 'styles.temp.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass-globber');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('test', ['clean', 'sassGlobber']);
	grunt.registerTask('default', ['test']);

};