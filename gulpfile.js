(function () {
  'use strict';

  /*jslint node: true */

  var gulp = require('gulp');

  gulp.task('copy-index', function (done) {
    gulp.src('index.html')
      .pipe(gulp.dest('cordova/www'), done);
  });

  gulp.task('copy-vendor', function (done) {
    gulp.src('bower_components/**/*.js').pipe(gulp.dest('cordova/www/bower_components'), done);
  });

  gulp.task('copy-js', function (done) {
    gulp.src('js/**/*.js').pipe(gulp.dest('cordova/www/js'), done);
  });

  gulp.task('build', ['copy-index', 'copy-vendor', 'copy-js']);
}());