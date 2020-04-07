const gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

// Task for compile styles
function style()
{
    return (
        gulp
           // .src('./scss/tags.scss')
            .src('./scss/style.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on('error', sass.logError) 
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
          //  .pipe(rename('styles.min.css'))
            .pipe(gulp.dest('./dist'))
    );
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./**/*.html').on('change', browserSync.reload);
}


 
// Expose the task by exporting it
exports.style = style;
exports.watch=watch;