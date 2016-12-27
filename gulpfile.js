var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence');
var sass = require('gulp-sass');

gulp.task('serve', function(){
    browserSync.init({
        server: "./"
    });
});

gulp.task('clean', function(callback){
  return gulp.src('./styles/arcade-test.css', { force: true })
             .pipe(clean());
});


gulp.task('compile-sass', function(callback){
  return gulp.src('./styles/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./styles/'));
});

gulp.task('sass', function(callback){
  gulpSequence(['clean', 'compile-sass'])(callback);
})
