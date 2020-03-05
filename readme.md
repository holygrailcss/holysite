
# Sassy Starter [![Stories in Ready](https://badge.waffle.io/minamarkham/sassy-starter.png?label=ready&title=Ready)](https://waffle.io/minamarkham/sassy-starter)

A starter toolkit based on [Scalable and Modular Architecture for CSS](http://smacss.com/) (SMACSS) and [Atomic Design](http://atomicdesign.bradfrost.com) for [Sass](http://sass-lang.com/) (SCSS) projects. Do what you'd like with it :)

Styles are broken down into the following groups: **Base, Layout, Atoms, Molecules, Organisms, States, Themes, Utilities and Overrides**

## Getting Started

1. If needed, [install](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) `node` and `npm` (Node Package Manager).
- If needed, install `gulp` with `npm install gulp -g`.

- In terminal, `cd` to the folder containing your project. Alternatively, you can type `cd ` and drag the location of the folder into your terminal and hit enter (on Macs).
- In terminal, type `npm install`. If (and _only_ if) `npm install` isn't working, try `sudo npm install`. This should install all [dependencies](#dependencies).
- In terminal, enter `gulp`.
- Your browser should open at `http://localhost:3000`. You can access this same page on any device on the same wifi network and they'll see whats on your screen. It'll even sync scrolls and clicks!
- Edit your code inside of the `src` folder.
- Your complied and minified css, html, and javascript files will be created and updated in `dist/`. Never edit files within the `dist/` folder, as it gets deleted frequently.
- Keep `gulp` running while you're making changes. When you want to stop the gulp task, hit `ctrl + C`.

_For theming: add separate file (theme.scss) in`src/scss/themes/`, override the default `$theme` variable, and run `gulp themes`._

## Requirements
- Node/NPM
- LibSass
- Gulp



## Features
- Live reloading with BrowserSync  NOT yet
- Image Minification    NOT yet
- Github Pages deployment
- Sass linting (based on [default](https://github.com/sasstools/sass-lint/blob/master/lib/config/sass-lint.yml) config)
- Autoprefixer configuration    NOT yet
- SMACSS and Atomic Design-based folder structure
- `px` to `em`, `px` to `rem` and other useful functions.
- Mixins for inlining media queries.
* Useful CSS helper classes.
* Default print styles, performance optimized.   NOT yet
* "Delete-key friendly." Easy to strip out parts you don't need.
- Includes:
  - [`Normalize.css`](https://necolas.github.com/normalize.css/)
    for CSS normalizations and common bug fixes
  - [`CSS Pesticide`](https://pesticide.io) for easy CSS debugging
  - [`jQuery`](https://jquery.com/) via CDN, with a local fallback
  - [`Modernizr`](http://modernizr.com/), via CDN, for feature
    detection
  - [`Apache Server Configs`](https://github.com/h5bp/server-configs-apache)
    that, among other, improve the web site's performance and security

## Dependencies
```
"autoprefixer": "^9.7.4",
"cssnano": "^4.1.10",
"gulp": "^4.0.2",
"gulp-postcss": "^8.0.0",
"gulp-rename": "^2.0.0",
"gulp-sass": "^4.0.2",
"gulp-sourcemaps": "^2.6.5",
"holygrailcss": "^1.0.7",
"interactjs": "^1.8.5",
"node-sass": "^4.13.1"

```

## Tasks

- default
  -test
  -scss
  -guide
  -build


s

## Directory structure

```
┌── .gitignore
├── .htaccess
├── src
│   ├── browserconfig.xml
│   ├── crossdomain.xml
│   ├── humans.txt
│   ├── icons
│   │   ├── apple-touch-icon-114x114-precomposed.png
│   ├── img
│   └── index.html

├── gulpfile.js
└── package.json
```

## Bugs & Support
Developed by Manuel Ruiz. Please list all bugs and feature requests in the Github issue tracker.

## Thanks & Resources

This toolkit is based on the work of the following fine people & projects.

- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Scalable and Modular Architecture for CSS](http://smacss.com/book) (<abbr title="Scalable and Modular Architecture for CSS">SMACSS</abbr>)
- [Atomic Design](http://atomicdesign.bradfrost.com)
