'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemap = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var webp = require('gulp-webp');
var rename = require('gulp-rename');
var pump = require('pump');
var del = require('del');
var uglify = require('gulp-uglify-es').default;

gulp.task('clean', function () {
  return del('docs');
});

gulp.task('copy', function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}'
  ], {
    base: 'source'
  })
  .pipe(gulp.dest('docs'));
});

gulp.task('html', () => {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('docs/'))
    .pipe(server.stream());
});

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('source/css'))
    .pipe(gulp.dest('docs/css'))
    .pipe(server.stream());
});

gulp.task('uglify', function () {
  return gulp.src('source/js/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('source/scripts/'))
    .pipe(gulp.dest('docs/scripts/'))
    .pipe(server.stream());
});

gulp.task('images', function () {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
  ]))
    .pipe(gulp.dest('source/img'))
    .pipe(gulp.dest('docs/img'));
});

gulp.task('sprite', function () {
  return gulp.src('source/img/inline/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('source/img'))
    .pipe(gulp.dest('docs/img'))
    .pipe(server.stream());
});

gulp.task('server', function () {
  server.init({
    server: 'source/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.scss', gulp.series('css'));
  gulp.watch('source/img/inline/*.svg', gulp.series('sprite'));
  gulp.watch('source/js/*.js', gulp.series('uglify'));
  gulp.watch('source/*.html', gulp.series('html'));
});

gulp.task('build', gulp.series('clean', 'html', 'uglify', 'copy', 'css', 'images', 'sprite'));
gulp.task('start', gulp.series('build', 'server'));
