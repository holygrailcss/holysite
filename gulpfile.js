const gulp = require('gulp');
const { series }  = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const inject = require('gulp-inject');
const browserSync = require('browser-sync').create();

// Task for compile styles
function compileStyles()
{
    console.log('Compiling styles...');

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
    console.log('Copying templates...');

    return (
        gulp
            .src('./src/*.html')
            .pipe(gulp.dest('./build'))
    );
}

// Task for copy assets folder to build
function copyAssets()
{
    console.log('Copying assets...');

    return (
        gulp
            .src('./assets/**/*')
            .pipe(gulp.dest('./build/assets'))
    );
}

// Task for copy styles folder to build
function copyStyles()
{
    console.log('Copying styles...');

    return (
        gulp
            .src('./dist/**/*')
            .pipe(gulp.dest('./build/css'))
    );
}

// Task for inject assets to templates
function injectAssets()
{
    console.log('Injecting assets to templates...');

    var target = gulp.src('./build/*.html');
    var sources = gulp.src(['./build/css/**/*.css'], { read: false });
 
    return target.pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./build'));
}

// Task for launch a server for development purposes
function devServer()
{
    console.log('Launching development server...');

    browserSync.init({
        server: {
            baseDir: './build/',
            index: 'index.html'
        }
    });
    
    // Wait for changes
    // gulp.watch('./scss/**/*.scss', gulp.series('compileStyles', 'copyStyles')());
    // gulp.watch('./src/**/*.html').on('change', gulp.series('copyTemplates', browserSync.reload)());
}
 
// Work tasks
exports.compileStyles = compileStyles;
exports.copyTemplates = copyTemplates;
exports.copyAssets = copyAssets;
exports.copyStyles = copyStyles;
exports.injectAssets = injectAssets;

// Compile full output
exports.generate = series(compileStyles, copyTemplates, copyAssets, copyStyles, injectAssets);

// Full development workflow
exports.dev = series(this.generate, devServer);
