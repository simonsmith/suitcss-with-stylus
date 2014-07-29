var gulp          = require('gulp');
var autoprefixer  = require('gulp-autoprefixer');
var stylus        = require('gulp-stylus');
var paths         = require('../util/paths');
var handleError   = require('../util/handleError');

gulp.task('stylus', function() {
  return gulp.src(paths.componentsSrc)
    .pipe(stylus().on('error', handleError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.tempFolder));
});