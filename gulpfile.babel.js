const gulp  = require('gulp');
const babel = require('gulp-babel');
const del   = require('del');
const sass  = require('gulp-sass');

gulp.task('clean', (cb) =>
  del([ 'dist' ], cb)
);

gulp.task('build:js', () =>
  gulp.src('src/**/*.js').
    pipe(babel({ presets: [ 'es2015', 'react' ] })).
    pipe(gulp.dest('dist'))
);

gulp.task('build:scss', () =>
  gulp.src('src/**/*.scss').
    pipe(sass({ includePaths: [ 'node_modules' ] }).on('error', sass.logError)).
    pipe(gulp.dest('dist'))
);


gulp.task('build:html', () =>
  gulp.src('src/**/*.html').pipe(
    gulp.dest('dist')
  )
);

gulp.task('build:font-awesome', () =>
  gulp.src('node_modules/font-awesome/fonts/*').pipe(
    gulp.dest('dist/renderer/fonts')
  )
);

gulp.task('build',
  gulp.parallel('build:js', 'build:html', 'build:scss', 'build:font-awesome')
);

gulp.task('watch',
  gulp.series('build', function watchStart() {
    gulp.watch('src/**/*.js', gulp.parallel('build:js'));
    gulp.watch('src/**/*.html', gulp.parallel('build:html'));
    gulp.watch('src/**/*.scss', gulp.parallel('build:scss'));
  })
);
