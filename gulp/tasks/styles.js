var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('styles', function() {
  runSequence(
    'clean',
    'stylus',
    'suit',
    'clean'
  );
});