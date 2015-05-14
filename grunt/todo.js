module.exports = {
	todo: {
		options: {
			marks:[
				{
				  name: "TODO",
				  pattern: /TODO/,
				  color: "yellow"
				},
				{
				  name: "FIXME",
				  pattern: /FIXME/,
				  color: "red"
				}
			],
			file: "report.md",
			githubBoxes: true,
			colophon: true,
			usePackage: true
		},
		src:[
			'<%= flink.output %>/**/*'
		],
	},
}