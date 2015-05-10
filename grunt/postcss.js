module.exports = {
	options: {
		map: true,
			processors: [
			require('lost')
			]
	},
	dist: {
		src: 'build/css/flink.css',
		dest: 'build/css/flink.css'
	}
};