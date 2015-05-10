module.exports = {
	options: {
		livereload: true,
	},
	images: {
		files: [ 'lib/img/*.{png,jpg,gif}' ],
		tasks: [ 'newer:imagemin' ]
	}, /* watch images in lib/img/ */
	deleting : {
		files: [ 'lib/img/*.{png,jpg,gif}' ],
		tasks: [ 'delete_sync' ]
	}, /* delete images */
	stylus: {
		files: [ 'lib/stylus/*.styl' ],
		tasks: [ 'stylus', 'postcss', 'autoprefixer' ]
	}, /* watch stylus lost-grid rupture autoprefixer :P whole css woodoo*/
	jade: {
		files: ['lib/jade/*.jade' ],
		tasks: ['jade']
	}, /* watch jade templates except template folder */
	scripts: {
		files: ['lib/**/*.js'],
		tasks: ['concat', 'uglify'],
		options : {
			spawn : false
		}
	} /* watch js concatinate and make it ugly :D */
};