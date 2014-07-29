var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('css', function() {
  runSequence(
    'clean',
    'stylus',
    'suit',
    'clean'
  );
});