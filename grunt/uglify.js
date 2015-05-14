module.exports = {
	dist : {
		src : '<%= flink.output %>/<%= flink.js %>/<%= package.name %>.js',
		dest : '<%= flink.output %>/<%= flink.js %>/<%= package.name %>.min.js'
	}
};