var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var rework       = require('gulp-rework');
var stylus       = require('gulp-stylus');
var clean        = require('gulp-clean');

var paths = {
  suitComponents: 'styles/suit_components/*.styl',
  mainCss: 'app.css'
};

gulp.task('compile-suit', ['compile-stylus'], function() {
  return gulp.src('built/' + paths.mainCss)
    .pipe(rework(require('rework-suit')()))
    .pipe(gulp.dest('.'))
    .pipe(gulp.src('./built'))
});

gulp.task('compile-stylus', ['clean-css'], function() {
  return gulp.src(paths.suitComponents)
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./built'));
});

gulp.task('clean-css', function() {
  return gulp.src('./built')
    .pipe(clean());
});

gulp.task('styles', ['compile-suit']);

gulp.task('watch', function() {
  gulp.watch(paths.suitComponents, ['styles']);
});