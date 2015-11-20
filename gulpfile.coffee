gulp  = require 'gulp'
babel = require 'gulp-babel'
seq   = require 'run-sequence'
del   = require 'del'
sass  = require 'gulp-sass'

gulp.task 'clean', (cb)->
  del(['dist'], cb)

gulp.task 'build', ['clean'], ->
  seq ['build:js', 'build:html', 'build:scss']

gulp.task 'build:js', ->
  gulp.src 'src/**/*.js'
    .pipe babel { presets: ['es2015', 'react'] }
    .pipe gulp.dest('dist')

gulp.task 'build:scss', ->
  gulp.src 'src/**/*.scss'
    .pipe sass().on('error', sass.logError)
    .pipe gulp.dest('dist')

gulp.task 'build:html', ->
  gulp.src 'src/**/*.html'
    .pipe gulp.dest('dist')

gulp.task 'watch', ['build'], ->
  gulp.watch 'src/**/*.js', ['build:js']
  gulp.watch 'src/**/*.html', ['build:html']
  gulp.watch 'src/**/*.scss', ['build:scss']
