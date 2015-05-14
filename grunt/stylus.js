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
			'<%= flink.output %>/<%= flink.css %>/<%= package.name %>.css': '<%= flink.input %>/<%= flink.stylus %>/<%= package.name %>.styl'
		}
	}
};