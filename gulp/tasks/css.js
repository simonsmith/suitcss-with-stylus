var gulp =          require('gulp');
var autoprefixer =  require('gulp-autoprefixer');
var stylus =        require('gulp-stylus');
var rework =        require('gulp-rework');
var rename =        require('gulp-rename');
var runSequence =   require('run-sequence');
var path =          require('path');
var reworkSuit =    require('rework-suit');
var del =           require('del');
var handleError =   require('../util/handleError');
var paths =         require('../paths');

/**
 * Compile all the Stylus components into individual CSS files, ready to be
 * passed through the SUIT tools.
 * */
gulp.task('stylus', function() {
  return gulp.src(paths.css.stylusSrc)
    .pipe(stylus().on('error', handleError))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9', 'Firefox ESR', 'Opera 12.1').on('error', handleError))
    .pipe(gulp.dest(paths.css.tmpDir));
});

/**
 * Put all the CSS components through the Rework SUIT plugin
 * */
gulp.task('suit', function() {
  return gulp.src(path.join(paths.css.tmpDir, paths.css.mainFile))
    .pipe(rework(
      reworkSuit()
    ).on('error', handleError))
    .pipe(rename(paths.css.builtFile))
    .pipe(gulp.dest(paths.css.dest));
});

/**
 * Clean up the compiled CSS files as no longer needed
 * */
gulp.task('clean', function(cb) {
  del([paths.css.tmpDir], cb);
});

gulp.task('css', function() {
  runSequence(
    'stylus',
    'suit',
    'clean'
  );
});
