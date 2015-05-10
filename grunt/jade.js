module.exports = {
	compile: {
		options: {
			pretty: true
		},
		files: [{
			expand: true,
			cwd: "lib/jade",
			src: "*.jade",
			dest: "build",
			ext: ".html"
		}]
	}
};