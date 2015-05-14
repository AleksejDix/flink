module.exports = {
	options: {
		map: true,
			processors: [
			require('lost')
			]
	},
	dist: {
		src: '<%= flink.output %>/<%= flink.css %>/<%= package.name %>.css',
		dest: '<%= flink.output %>/<%= flink.css %>/<%= package.name %>.css'
	}
};