var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');
 
gulp.task('build', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('./inphinity.js'))
        .pipe(gulp.dest('./'))
        .pipe(rename('inphinity.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['build'], function(){
    console.log('default task done!')
});