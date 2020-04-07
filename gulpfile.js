var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

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

// Task for generate compiled output
function generate()
{
    return (
        gulp
            .series('compileStyles', 'copyTemplates')()
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
            baseDir: './dist/',
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
exports.dev = dev;
exports.generate = generate;