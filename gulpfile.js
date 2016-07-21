var gulp = require('gulp'),
    babel = require('gulp-babel'),
    changed = require('gulp-changed'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    compass = require('gulp-compass'),
    del = require('del');

const sassFolder = 'app/assets/css/sass';
const cssVendors = 'app/assets/css/vendors/**/*';
const cssSRC = sassFolder + '/**/*.scss';
const cssDEST = 'public/css';
const cssVND = 'public/css/vendors';
const cssTMP = 'public/css/tmp';

const jsVendors = 'app/assets/js/vendors/**/*';
const jsVND = 'public/js/vendors';

const viewsSRC = 'app/views/**/*';
const viewsDEST = 'public/views';

const fontsSRC = 'app/assets/fonts/*';
const fontsDEST = 'public/fonts';

gulp.task('build', ['styles', 'vendors-styles', 'vendors-js', 'views', 'fonts'], function() {
    gulp.start('clean');
});

gulp.task('watch', ['fonts'], function () {
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

gulp.task('vendors-styles', function() {
    return gulp.src([cssVendors]).pipe(gulp.dest(cssVND));
});

gulp.task('vendors-js', function() {
    return gulp.src([jsVendors]).pipe(gulp.dest(jsVND));
});

gulp.task('views', function() {
    return gulp.src([viewsSRC]).pipe(gulp.dest(viewsDEST));
});

gulp.task('fonts', function() {
    return gulp.src([fontsSRC]).pipe(gulp.dest(fontsDEST));
});


// gulp.task('js', function() {
//     return gulp.src(cssSRC)
//         .pipe(compass({
//             css: cssTMP,
//             sass: sassFolder,
//         }))
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(cleanCSS({
//             compatibility: 'ie8'
//         }))
//         .pipe(gulp.dest(cssDEST));
// });