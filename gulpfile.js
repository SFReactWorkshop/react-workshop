var babelify = require('babelify')
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var clean = require('gulp-clean');
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require("gulp-notify");
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var entryFile = './src/app.js',
    buildDir = './build/scripts/';

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); 
}

function buildScript(watch) {
  var props = {
    entries: [ entryFile ], 
    debug: true, 
    cache: {}, 
    packageCache: {}
  };

  var bundler = watch ? watchify(browserify(props)) : browserify(props);
  bundler.transform(babelify, { presets: ['react'] });
  
  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', handleErrors)
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest(buildDir));
  }

  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundling Complete!');
  });

  return rebundle();
}

gulp.task('clean', function() {
  return gulp.src(buildDir + '*.js', { read: false })
    .pipe(clean());
});

gulp.task('build', ['clean'], function() {
  return buildScript(false);
});

gulp.task('default', ['build'], function() {
  return buildScript(true);
});
