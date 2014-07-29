var gulp   = require('gulp');
var rimraf = require('gulp-rimraf');
var paths  = require('../util/paths');

gulp.task('clean', function() {
  return gulp.src(paths.tempFolder)
    .pipe(rimraf());
});