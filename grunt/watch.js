module.exports = {
	images: {
		files: [ '<%= flink.input %>/<%= flink.img %>/*.{png,jpg,gif}' ],
		tasks: [ 'imagemin' ]
	}, /* watch images in lib/img/ */
	deleting : {
		files: [ '<%= flink.input %>/<%= flink.img %>/*.{png,jpg,gif}' ],
		tasks: [ 'delete_sync' ]
	}, /* delete images */
	stylus: {
		files: [ '<%= flink.input %>/<%= flink.stylus %>/**/*.styl' ],
		tasks: [ 'newer:stylus', 'postcss', 'autoprefixer', 'newer:todo' ]
	}, /* watch stylus lost-grid rupture autoprefixer :P whole css woodoo*/
	jade: {
		files: ['<%= flink.input %>/<%= flink.jade %>/*.jade' ],
		tasks: ['jade']
	}, /* watch jade templates except template folder */
	scripts: {
		files: ['<%= flink.input %>/**/*.js'],
		tasks: ['newer:concat', 'newer:uglify'],
		options : {
			spawn : false
		}
	} /* watch js concatinate and make it ugly :D */
};