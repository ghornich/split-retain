'use strict';

var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var packageJson = require('./package.json');
var version = packageJson.version;
var publishTasks = require('../gulp-publish-tasks');

gulp.task('pre-publish', ['update-source-version', 'build-browser-full', 'build-browser-min', 'update-readme-toc']);

gulp.task('update-readme-toc', () => publishTasks.updateMarkdownTOC('README.md'));
gulp.task('update-source-version', () => publishTasks.updateSourceVersion('split-retain.js', version));
gulp.task('build-browser-full', () => publishTasks.browserify('browser-build.js', 'browser/split-retain.js'));
gulp.task('build-browser-min', () => publishTasks.browserify('browser-build.js', 'browser/split-retain.min.js', { minify: true }));
