var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var rework       = require('gulp-rework');
var stylus       = require('gulp-stylus');
var clean        = require('gulp-clean');
var reworkSuit   = require('rework-suit');
var runSequence  = require('run-sequence');

var paths = {
  suitComponents: 'styles/suit_components/*.styl',
  mainCss: 'app.css',
  tempFolder: './built/'
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('compile-suit', function() {
  return gulp.src(paths.tempFolder + paths.mainCss)
    .pipe(rework(reworkSuit()).on('error', handleError))
    .pipe(gulp.dest('.'))
    .pipe(gulp.src(paths.tempFolder))
});

gulp.task('compile-stylus', function() {
  return gulp.src(paths.suitComponents)
    .pipe(stylus().on('error', handleError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.tempFolder));
});

gulp.task('clean-css', function() {
  return gulp.src(paths.tempFolder)
    .pipe(clean());
});

/**
 * Cannot just pipe the stylus result to the rework-suit plugin as it throws an error.
 * Instead temporarily write the files to disk and pass them to it instead.
 */
gulp.task('styles', function() {
  runSequence(
    'clean-css',
    'compile-stylus',
    'compile-suit',
    'clean-css'
  );
});

gulp.task('watch', function() {
  gulp.watch(paths.suitComponents, ['styles']);
});