var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('css', function() {
  runSequence(
    'stylus',
    'suit',
    'clean'
  );
});