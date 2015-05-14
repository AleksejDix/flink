module.exports = {
	compile: {
		options: {
			pretty: true
		},
		files: [{
			expand: true,
			cwd: "<%= flink.input %>/<%= flink.jade %>",
			src: "*.<%= flink.jade %>",
			dest: "<%= flink.output %>",
			ext: ".html"
		}]
	}
};