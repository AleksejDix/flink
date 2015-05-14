module.exports = {
	dist: {
    cwd: '<%= flink.output %>/<%= flink.img %>/',
    src: ['**'],
    syncWith: '<%= flink.input %>/<%= flink.img %>/'
  }
}