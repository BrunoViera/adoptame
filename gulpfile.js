var gulp = require('gulp'),
    babel = require('gulp-babel'),
    changed = require('gulp-changed'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    compass = require('gulp-compass'),
    del = require('del');

const sassFolder = 'app/assets/css/sass';
const cssSRC = sassFolder + '/**/*.scss';
const cssDEST = 'public/css';
const cssTMP = 'public/css/tmp';

const imgSRC = 'app/assets/images/*';
const imgDEST = 'public/images/';

const jsVendors = 'app/assets/js/vendors/**/*';
const jsVND = 'public/js/vendors';

const viewsSRC = 'app/views/**/*';
const viewsDEST = 'public/views';

gulp.task('build', ['styles', 'images', 'views'], function() {
    gulp.start('clean');
});

gulp.task('watch', function () {
   gulp.watch(cssSRC, ['styles']);
   gulp.watch(viewsSRC, ['views']);
});

gulp.task('clean', function(cb) {
    del([cssTMP], cb);
});

gulp.task('styles', function() {
    return gulp.src(cssSRC)
        .pipe(compass({
            css: cssTMP,
            sass: sassFolder,
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(cssDEST));
});

gulp.task('vendors-js', function() {
    return gulp.src([jsVendors]).pipe(gulp.dest(jsVND));
});

gulp.task('views', function() {
    return gulp.src([viewsSRC]).pipe(gulp.dest(viewsDEST));
});

gulp.task('images', function() {
    return gulp.src([imgSRC]).pipe(gulp.dest(imgDEST));
});