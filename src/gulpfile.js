var gulp = require('gulp'),
watch = require('gulp-watch');
var sass  = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');

gulp.task('default', function() {
    gulp
      .src('./sass/style.scss')
      .pipe(sass({
        strictMath: true
      }))
      .pipe(postcss([
        autoprefixer({
          browsers: [
            '> 1%',
            'last 3 versions',
            'iOS >= 7',
            'IE >= 9',
            'Firefox >= 18',
            'Opera >= 14',
            'Safari >= 8',
            'Android >= 2.1',
            'ExplorerMobile >= 10'
          ]
        })
      ]))
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
return watch('./sass/*.scss', { ignoreInitial: false })
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('./'));
});

