module.exports = {
	options : {
		browsers : ['> 5%', 'last 10 version', 'ie 8', 'ie 9']
	},
	dist : {
		files : {
			'<%= flink.output %>/<%= flink.css %>/<%= package.name %>.css' : '<%= flink.output %>/<%= flink.css %>/<%= package.name %>.css'
		}
	}
};