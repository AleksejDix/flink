module.exports = {
	dist : {
		src : ['<%= flink.input %>/<%= flink.js %>/**/*.js'],
		dest : '<%= flink.output %>/<%= flink.js %>/<%= package.name %>.js'
	}
};