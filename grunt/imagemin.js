module.exports = {
  dynamic : {
    files: [{
      expand: true,
      cwd: '<%= flink.input %>/<%= flink.img %>/',
      src: ['**/*.{png,jpg,gif}'],
      dest: '<%= flink.output %>/<%= flink.img %>/'
    }]
  }
};