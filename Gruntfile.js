module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: { "./source/styles/main.css": "./source/styles/main.less" },
      },
    },

    watch: {
      less: {
        files: ["./source/styles/*.less"],
        tasks: ["less:development"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
};
