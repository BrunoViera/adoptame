var gulp = require('gulp'),
    babel = require('gulp-babel'),
    changed = require('gulp-changed'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    compass = require('gulp-compass'),
    del = require('del');


// Definamos algunas constantes que puedan reusarse
const sassFolder = 'app/assets/css/sass';
const vendorsFolder = 'app/assets/css/vendors/**/*';
const cssSRC = sassFolder + '/**/*.scss';
const cssDEST = 'public/css';
const cssVND = 'public/css/vendors';
const cssTMP = 'public/css/tmp';

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
    return gulp.src([vendorsFolder]).pipe(gulp.dest(cssVND));
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

gulp.task('clean', function(cb) {
    del([cssTMP], cb);
});

gulp.task('build', ['styles'], function() {
    gulp.start('clean');
});

gulp.task('watch', function () {
   gulp.watch(cssSRC, ['styles']);
});