const gulp = require('gulp');
const { series }  = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// Task for compile styles
function compileStyles()
{
    return (
        gulp
            .src('./scss/style.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on('error', sass.logError) 
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(rename('styles.min.css'))
            .pipe(gulp.dest('./dist'))
    );
}

// Task for copy HTML templates
function copyTemplates()
{
    return (
        gulp
            .src('./src/*.html')
            .pipe(gulp.dest('./build'))
    );
}

// Task for watch changes during development
function dev()
{
    // Compile output 
    gulp.series('compileStyles', 'copyTemplates')();

    // Launch development server
    browserSync.init({
        server: {
            baseDir: './build',
            index: "index.html"
        }
    });
    
    // Wait for changes
    gulp.watch('./scss/**/*.scss', compileStyles);
    gulp.watch('./src/**/*.html').on('change', browserSync.reload);
}
 
// Expose the task by exporting it
exports.compileStyles = compileStyles;
exports.copyTemplates = copyTemplates;
exports.generate = series(compileStyles, copyTemplates);

exports.dev = dev;
