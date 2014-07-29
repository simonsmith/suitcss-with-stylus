var gulp         = require('gulp');
var rework       = require('gulp-rework');
var rename       = require('gulp-rename');
var reworkSuit   = require('rework-suit');
var paths        = require('../util/paths');
var handleError  = require('../util/handleError');

gulp.task('suit', function() {
  return gulp.src(paths.tempFolder + paths.mainFile)
    .pipe(rework(reworkSuit()).on('error', handleError))
    .pipe(rename('components.css'))
    .pipe(gulp.dest(paths.componentsDest))
});