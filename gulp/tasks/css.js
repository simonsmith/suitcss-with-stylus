var path =        require('path');
var gulp =        require('gulp');
var stylus =      require('gulp-stylus');
var rename =      require('gulp-rename');
var postcss   =   require('gulp-postcss');
var clip =        require('gulp-clip-empty-files');
var bemLinter =   require('postcss-bem-linter');
var cssnext   =   require('cssnext');
var del =         require('del');
var notifyError = require('../notifyError');
var paths =       require('../paths');

/**
 * Compile all Stylus into CSS files, placed in a temp directory
 */
gulp.task('stylus', function() {
  return gulp.src(paths.css.stylusSrc)
    .pipe(stylus().on('error', notifyError))
    .pipe(gulp.dest(paths.css.tmpDir));
});

/**
 * Lint all built CSS files individually
 */
gulp.task('bemlint', ['stylus'], function() {
  return gulp.src(path.join(paths.css.tmpDir, '**/*.css'))
    .pipe(clip())
    .pipe(postcss([
      bemLinter(),
    ]).on('error', notifyError))
});

/**
 * Process CSS files with PostCSS and generate built file
 */
gulp.task('postcss', ['stylus', 'bemlint'], function() {
  return gulp.src(path.join(paths.css.tmpDir, paths.css.mainFile))
    .pipe(postcss([
      cssnext()
    ]).on('error', notifyError))
    .pipe(rename(paths.css.builtFile))
    .pipe(gulp.dest(paths.css.dest));
});

/**
 * Nuke temp CSS files
 * */
gulp.task('clean', ['stylus', 'bemlint', 'postcss'], function(cb) {
  del([paths.css.tmpDir], cb);
});

gulp.task('css', ['stylus', 'bemlint', 'postcss', 'clean']);
