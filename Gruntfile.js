module.exports = function(grunt) {

  // Load S3 plugin
  grunt.loadNpmTasks('grunt-aws');

  // Static Webserver
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('.aws.json'),

    // Copy files
    copy: {
      main: {
        expand: true,
        cwd: 'www/',
        src: ['**'],
        dest: 'dist/'
      }
    },

    // upload to S3
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "<%= aws.bucket %>",
        enableWeb: true,
          headers: {
          CacheControl: 604800 // 1 week
        }
      },
      build: {
        cwd: "dist/",
        src: "**"
      }
    },

    // Run a webserver
    connect: {
      server: {
        options: {
          port: 8000,
          base: "dist",
          keepalive: true
        }
      }
    }

  });

  // Default task(s), default runs the connect task
  grunt.registerTask("default", ["connect"]);

  // Build task
  grunt.registerTask('build', ['copy:main']);

  // Deploy task
  grunt.registerTask('deploy', ['copy:main', 's3']);

};
