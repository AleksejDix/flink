module.exports = {
	compile: {
		options: {
			use: [
				require('rupture')
			],
			compress: false,
			pats: [
					'./node_modules/rupture'
			]
		},
		files: {
			'build/css/flink.css': 'lib/stylus/flink.styl'
		}
	}
};