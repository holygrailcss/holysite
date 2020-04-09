const { src, series, watch, dest }  = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const inject = require('gulp-inject');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// Task for compile styles
function style()
{
    console.log('Compiling styles...');

    return (
            src('./scss/style.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on('error', sass.logError) 
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            //.pipe(rename('styles.min.css'))
            .pipe(rename('style.css'))
            .pipe(dest('./dist'))
    );
}

// Task for copy HTML templates
function copyTemplates()
{
    console.log('Copying templates...');

    return (
        src('./src/*.html')
        .pipe(dest('./build'))
    );
}

// Task for copy assets folder to build
function copyAssets()
{
    console.log('Copying assets...');

    return (
        src('./assets/**/*')
        .pipe(dest('./build/assets'))
    );
}

// Task for copy styles folder to build
function copyStyles()
{
    console.log('Copying styles...');

    return (
        src('./dist/**/*')
        .pipe(dest('./build/css'))
    );
}

// Task for inject assets to templates
function injectAssets()
{
    console.log('Injecting assets to templates...');

    var target = src('./build/*.html');
    var sources = src(['./build/css/**/*.css'], { read: false });
 
    return target.pipe(inject(sources, {relative: true}))
        .pipe(dest('./build'));
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
    
    // Watch tasks
    watch("./scss/**/*.scss", series('style', 'copyStyles')).on('change', browserSync.reload);
    watch('./src/**/*.html', series('copyTemplates', 'injectAssets')).on('change', browserSync.reload)
}
 
// Work tasks
exports.style = style;
exports.copyTemplates = copyTemplates;
exports.copyAssets = copyAssets;
exports.copyStyles = copyStyles;
exports.injectAssets = injectAssets;

// Compile full output
exports.generate = series(style, copyTemplates, copyAssets, copyStyles, injectAssets);

// Full development workflow
exports.dev = series(this.generate, devServer);
