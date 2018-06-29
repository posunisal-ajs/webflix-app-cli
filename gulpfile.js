var postcss = require('gulp-postcss');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var precss = require('precss');
var cssnano = require('cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps  = require('gulp-sourcemaps');
// var postcssFlexibility = require('postcss-flexibility');

gulp.task('serve', ['css'], function() {
    browserSync.init({
        proxy: "http://localhost:3000/",
        browser: "chrome",
    });

    // gulp.watch("./src/css/**/*.css", ['css']).on('change', browserSync.reload);
    gulp.watch("./src/css/**/*.css", ['css']).on('change');
    // gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('css', function() {
    var plugins = [
        precss(),
        // cssnano(),
        // postcssFlexibility(),
    ];
    return gulp.src('./src/css/templates.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(autoprefixer({
            browsers: ['ie >= 9']
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['serve', 'css']);