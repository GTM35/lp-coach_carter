module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./source/assets/styles/main.css": "./source/assets/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "./dist/styles/main.min.css": "./source/assets/styles/main.less",
        },
      },
    },

    watch: {
      less: {
        files: ["./source/assets/styles/*.less"],
        tasks: ["less:development"],
      },
    },

    uglify: {
      options: {
        mangle: false,
      },
      my_target: {
        files: {
          "./dist/js/main.min.js": "./source/assets/scripts/main.js",
        },
      },
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: "./source/assets/images/",
            src: ["**"],
            dest: "./dist/images/",
          },
          {
            expand: true,
            cwd: "./source/assets/videos/",
            src: ["**"],
            dest: "./dist/videos/",
          },
          {
            expand: true,
            cwd: "./source/assets/fonts/",
            src: ["**"],
            dest: "./dist/fonts/",
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["less:production", "uglify", "copy"]);
};
