module.exports = {
  bsFiles:{
    src: [
      '<%= flink.output %>/**/**/*.*'
    ]
  },
  options: {
    server: {
      baseDir: "./<%= flink.output %>"
    }
  }
};