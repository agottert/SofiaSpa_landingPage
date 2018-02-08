var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('build', ['clean'], function () {
  // HTML
  gulp.src('source/*.handlebars')
      .pipe(handlebars({}, {
        'batch': ['./source/partials']
      }))
      .pipe(rename(function(path) {
        path.extname = '.html';
      }))
      .pipe(gulp.dest('dist'));
  // CSS
  gulp.src('css/**/*')
      .pipe(gulp.dest('dist/css'));
  // Fonts
  gulp.src('fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));
  // Images
  gulp.src('imagenes/**/*')
      .pipe(gulp.dest('dist/imagenes'));
  // JS
  gulp.src('js/**/*')
      .pipe(gulp.dest('dist/js'));
});

// Delete the dist directory
gulp.task('clean', function () {
  return del(['dist']);
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch([
    'css/**/*',
    'fonts/**/*',
    'imagenes/**/*',
    'js/**/*',
    'source/**/*.handlebars'
  ], ['build']);
});

gulp.task('default', ['watch', 'build']);
