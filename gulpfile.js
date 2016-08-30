'use strict';

var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var markdownTOC = require('markdown-toc');

gulp.task('pre-publish', ['build-browser', 'update-readme-toc']);
gulp.task('build-browser', ['build-browser-full', 'build-browser-min']);

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

gulp.task('update-readme-toc', function () {
    var readme = fs.readFileSync('README.md', { encoding: 'utf-8' });
    readme = markdownTOC.insert(readme);
    fs.writeFileSync('README.md', readme, { encoding: 'utf-8' });
});

function handleStreamError(error) {
    console.error(error.stack);
    this.emit('end');
}
