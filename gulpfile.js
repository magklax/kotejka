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
var minify = require('gulp-minify');

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('source/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('source/css'))
    .pipe(server.stream());
});

gulp.task('js', function () {
  return gulp.src('source/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('source/scripts'))
    .pipe(server.stream());
})

gulp.task('images', function () {
  return gulp.src('source/img/**/*.{png,jvg,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
  ]))
    .pipe(gulp.dest('source/img'));
});

gulp.task('sprite', function () {
  return gulp.src('source/img/inline/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('source/img'))
    .pipe(server.stream());
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
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
  gulp.watch('source/js/*.js', gulp.series('js'));
  gulp.watch('source/*.html', gulp.series('refresh'));
});

gulp.task('build', gulp.series('css', 'js', 'images', 'sprite'));
gulp.task('start', gulp.series('build', 'server'));
