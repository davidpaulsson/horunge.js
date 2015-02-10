module.exports = function(grunt) {

  var horBanner = '/*! \n' +
        ' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * https://github.com/davidpaulsson/horunge.js \n' +
        ' * Licensed WTFPL \n' +
        ' */ \n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    horBanner: horBanner,
    concat: {
      options: {
        separator: ';',
        stripBanners: true,
        banner: horBanner,
      },
      dist: {
        src: ['src/jquery.horunge.js'],
        dest: 'dist/jquery.horunge.js'
      }
    },
    uglify: {
      options: {
        report: 'gzip',
        banner: horBanner
      },
      dist: {
        files: {
          'dist/jquery.horunge.min.js': 'src/jquery.horunge.js'
        }
      }
    },
    qunit: {
      files: ['test/index.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
