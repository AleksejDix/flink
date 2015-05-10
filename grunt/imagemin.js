module.exports = {
  dynamic : {
    files: [{
      expand: true,
      cwd: 'lib/img/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'build/img/'
    }]
  }
};