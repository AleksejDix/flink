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
				},
				{
					name: "DONE",
					pattern: /DONE/,
					color: "green"
				}
			],
			file: "readme/report.md",
			githubBoxes: true,
			colophon: true,
			usePackage: true
		},
		src:[
			'<%= flink.input %>/**/*'
		],
	},
}