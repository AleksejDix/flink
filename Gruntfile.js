module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
 		stylus: {
			compile: {
				options: {
					use:[
						require('rupture')
						],
					compress: false,
		      		paths: [
		      			'./node_modules/rupture',
		      			'source/stylus'
		      			]
		    	},
		    	files: {
		    		'build/style.css': 'source/stylus/main.styl'
		    	}
			}
		},
		postcss: {
			options: {
			map: true,
				processors: [
				require('lost')
				]
			},
			dist: {
				src: 'build/style.css',
				dest: 'build/style.css'
			}
		},
		autoprefixer: {
			compile: {
				files: {
					'build/style.css': 'build/style.css'
				},
			},
		},
		cssmin: {
			clean: {
				files: {
					'build/style.css': 'build/style.css'
				}
			}
		},
		jade: {
			compile: {
				options: {
					pretty: true
    			},
				files: [{
					expand: true,
					cwd: "source/jade",
					src: "*.jade",
					dest: "build",
					ext: ".html"
				}]
			}
		},
		imagemin: {
			dynamic: {
				files: [{
				expand: true,
				cwd: 'source/img/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'build/img/'
				}]
			}
		},
		uglify: {
			bower_js_files: {
				files: {
					'build/output.min.js': [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/modernizr/modernizr.js',
					'bower_components/classie/classie.js',
					'source/javascript/index.js'
					]
				}
			}
		},
		connect: {
			server: {
				options: {
		      	port: 9001,
		        base: 'build'
				}
			}
		},
		watch: {
		    options: {
		        livereload: true,
		    },
			stylus: {
				files: [ 'source/stylus/*.styl' ],
				tasks: [ 'stylus', 'postcss', 'autoprefixer']
			},
			jade: {
				files: [ 'source/jade/*.jade' ],
				tasks: ['jade']
			},
			scripts: {
				files: ['source/**/*.js'],
				tasks: ['uglify']
			}
		},
	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['imagemin','connect','watch']);
};