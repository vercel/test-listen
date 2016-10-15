const gulp = require('gulp')
const del = require('del')
const ava = require('gulp-ava')
const babel = require('gulp-babel')
const help = require('gulp-task-listing')

gulp.task('help', help)

gulp.task('compile', [
  'compile-lib',
  'compile-test'
])

gulp.task('compile-lib', () => {
  return gulp.src('lib/**/*.js')
  .pipe(babel({
    presets: ['es2015'],
    plugins: [
      'transform-runtime',
      'syntax-async-functions',
      'transform-async-to-generator'
    ]
  }))
  .pipe(gulp.dest('build/lib'))
})

gulp.task('compile-test', () => {
  return gulp.src('test/*.js')
  .pipe(babel({
    presets: ['es2015'],
    plugins: [
      'transform-runtime',
      'syntax-async-functions',
      'transform-async-to-generator'
    ]
  }))
  .pipe(gulp.dest('build/test'))
})

gulp.task('test', ['compile'], () => {
  return gulp.src('build/test/*.js')
  .pipe(ava())
})

gulp.task('clean', () => {
  return del(['build'])
})

gulp.task('default', ['compile', 'test'])
