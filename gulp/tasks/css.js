var path =        require('path');
var gulp =        require('gulp');
var stylus =      require('gulp-stylus');
var rename =      require('gulp-rename');
var postcss   =   require('gulp-postcss');
var bemLinter =   require('postcss-bem-linter');
var atImport  =   require('postcss-import');
var cssnext   =   require('cssnext');
var del =         require('del');
var handleError = require('../util/handleError');
var paths =       require('../paths');

/**
 * Compile all Stylus into CSS files, placed in a temp directory
 */
gulp.task('stylus', function() {
  return gulp.src(paths.css.stylusSrc)
    .pipe(stylus().on('error', handleError))
    .pipe(gulp.dest(paths.css.tmpDir));
});

/**
 * Lint all built CSS files individually
 */
gulp.task('bemlint', ['stylus'], function() {
  return gulp.src(path.join(paths.css.tmpDir, '**/*.css'))
    .pipe(postcss([
      bemLinter(),
    ]).on('error', handleError))
});

/**
 * Process CSS files with PostCSS and generate built file
 */
gulp.task('postcss', ['stylus', 'bemlint'], function() {
  return gulp.src(path.join(paths.css.tmpDir, paths.css.mainFile))
    .pipe(postcss([
      atImport(),
      cssnext()
    ]).on('error', handleError))
    .pipe(rename(paths.css.builtFile));
});

/**
 * Nuke temp CSS files
 * */
gulp.task('clean', ['stylus', 'bemlint', 'postcss'], function(cb) {
  del([paths.css.tmpDir], cb);
});

gulp.task('css', ['stylus', 'bemlint', 'postcss', 'clean']);
