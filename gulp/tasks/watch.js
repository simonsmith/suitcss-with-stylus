var gulp  = require('gulp');
var paths = require('../util/paths');

gulp.task('watch', function() {
  gulp.watch(paths.componentsSrc, ['styles']);
});