﻿/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
*/
'use strict';

var eslint = require('gulp-eslint');
var gulp = require('gulp');

gulp.task('lint', () => {
  return gulp.src([
    './**/*.js',
    '!**/node_modules/**',
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
