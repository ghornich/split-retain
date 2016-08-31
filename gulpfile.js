'use strict';

var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var packageJson = require('./package.json');
var version = packageJson.version;
var publishTasks = require('gulp-publish-tasks');



gulp.task('pre-publish', ['update-source-version', 'build-browser', 'update-readme-toc']);

gulp.task('build-browser', ['build-browser-full', 'build-browser-min']);
gulp.task('update-readme-toc', () => publishTasks.updateMarkdownTOC('README.md'));
gulp.task('update-source-version', () => publishTasks.updateSourceVersion('split-retain.js', version));



gulp.task('build-browser-full', function () {
    return browserify('browser-build.js')
    .bundle()
    .on('error', handleStreamError)
    .pipe(fs.createWriteStream('browser/split-retain.js'))
});

gulp.task('build-browser-min', function () {
    return browserify('browser-build.js')
    .plugin('minifyify', { map: false })
    .bundle()
    .on('error', handleStreamError)
    .pipe(fs.createWriteStream('browser/split-retain.min.js'));
});

function handleStreamError(error) {
    console.error(error.stack);
    this.emit('end');
}
