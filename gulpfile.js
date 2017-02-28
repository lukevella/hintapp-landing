var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


gulp.task('css', function () {
  gulp.src('./css/**/*.css')
    .pipe(uglifycss({
      maxLineLen: 80,
      uglyComments: true
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('image', function () {
  gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});


gulp.task('default', ['html', 'css', 'image']);
