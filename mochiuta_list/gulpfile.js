var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('./static/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./static/sass/*.scss', gulp.task('sass'));
});