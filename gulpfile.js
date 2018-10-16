// TO INSTALL ALL MODULES:
// npm i gulp gulp-debug gulp-changed gulp-cached gulp-if gulp-filter gulp-autoprefixer gulp-sass gulp-pug gulp-pug-inheritance gulp-sass-inheritance browser-sync gulp-connect-php --save-dev

'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var changed = require('gulp-changed');
var cached = require('gulp-cached');
var gulpif = require('gulp-if');
var filter = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var pugInheritance = require('gulp-pug-inheritance');
var sassInheritance = require('gulp-sass-inheritance');
var browserSync = require('browser-sync');
var connectPHP = require('gulp-connect-php');

///////////////////////////////////////////////////////////////////////////
// SERVER SETTINGS PHP
///////////////////////////////////////////////////////////////////////////

// gulp.task('php', function () {
// 	connectPHP.server({
// 		base: 'app/',
// 		keepalive: true,
// 		hostname: 'localhost',
// 		port: 8080,
// 		open: false
// 	});
// });

// gulp.task('browser-sync', function() {
// 	browserSync({
// 		// CHANGE PROXY NAME/ADRESS OF YOUR PROJECT
// 		proxy: 'test.dev',
// 		port: 8080,
// 		notify: false,
// 	});
// });

// gulp.task('sass', function() {
// 	// SWITCH TO CHANGE BOOTSTRAP PROPS
// 	// return gulp.src(['app/sass/**/*.scss', 'app/sass/**/*.sass', 'app/libs/bootstrap/scss/**/*.scss'])
// 	return gulp.src('app/sass/**.scss')
// 		.pipe(changed('app/sass/*', {
// 			extension: '.scss'
// 		}))
// 		.pipe(gulpif(global.isWatching, cached('sass')))
// 		.pipe(sassInheritance({dir: 'app/sass/'}))
// 		.pipe(debug({title: 'Changed style-file'}))
// 		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions', 'Firefox ESR', 'Firefox >= 20', '> 5%', 'iOS 7'],
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('app/css/'))
// 		.pipe(browserSync.reload({
// 			stream: true
// 		}));
// });


// gulp.task('pug', function() {
// 	return gulp.src('app/components/**/*.pug')
// 		.pipe(changed('app/', {
// 			extension: '.html'
// 		}))
// 		.pipe(gulpif(global.isWatching, cached('pug')))
// 		.pipe(pugInheritance({
// 			basedir: 'app/components/',
// 			skip: 'node_modules'
// 		}))
// 		.pipe(filter(function (file) {
// 			return !/\/_/.test(file.path) && !/^_/.test(file.relative);
// 		}))
// 		.pipe(pug({
// 			pretty: true
// 		}))
// 		.pipe(debug({title: 'Changed page'}))
// 		.pipe(gulp.dest('app/'));
// });

// gulp.task('setWatch', function() {
// 	global.isWatching = true;
// });

// gulp.task('watch', ['setWatch', 'pug', 'sass', 'browser-sync', 'php'], function() {
// 	// SWITCH TO CHANGE BOOTSTRAP PROPS
// 	// gulp.watch(['app/sass/**/*.scss', 'app/sass/**/*.sass', 'app/libs/bootstrap/scss/**/*.scss'], ['sass']);
// 	gulp.watch('app/sass/*.scss', ['sass']);
// 	gulp.watch(['app/components/pages/*.pug', 'app/components/_modules/**/*.pug'], ['pug']);
// 	gulp.watch('app/pages/**/*.*', browserSync.reload);
// 	gulp.watch('app/js/*.*', browserSync.reload);
// });






///////////////////////////////////////////////////////////////////////////
// SERVER SETTINGS WITHOUT PHP
///////////////////////////////////////////////////////////////////////////

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app',
			directory: true
		},
		files: 'app/pages/*.html',
		notify: false,
	});
});

gulp.task('sass', function() {
	// SWITCH TO CHANGE BOOTSTRAP PROPS
	// return gulp.src(['app/sass/**/*.scss', 'app/sass/**/*.sass', 'app/libs/bootstrap/scss/**/*.scss'])
	return gulp.src('app/sass/**.scss')
		.pipe(changed('app/sass/*', {
			extension: '.scss'
		}))
		.pipe(gulpif(global.isWatching, cached('sass')))
		.pipe(sassInheritance({dir: 'app/sass/'}))
		.pipe(debug({title: 'Changed style-file'}))
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions', '> 5%', 'iOS 7'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});


gulp.task('pug', function() {
	return gulp.src('app/components/**/*.pug')
		.pipe(changed('app/', {
			extension: '.html'
		}))
		.pipe(gulpif(global.isWatching, cached('pug')))
		.pipe(pugInheritance({
			basedir: 'app/components/',
			skip: 'node_modules'
		}))
		.pipe(filter(function (file) {
			return !/\/_/.test(file.path) && !/^_/.test(file.relative);
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(debug({title: 'Changed page'}))
		.pipe(gulp.dest('app/'));
});

gulp.task('setWatch', function() {
	global.isWatching = true;
});

gulp.task('watch', ['setWatch', 'pug', 'sass', 'browser-sync'], function() {
	// SWITCH TO CHANGE BOOTSTRAP PROPS
	// gulp.watch(['app/sass/**/*.scss', 'app/sass/**/*.sass', 'app/libs/bootstrap/scss/**/*.scss'], ['sass']);
	gulp.watch('app/sass/*.scss', ['sass']);
	gulp.watch(['app/components/pages/*.pug', 'app/components/_modules/**/*.pug'], ['pug']);
	gulp.watch('app/pages/**/*.*', browserSync.reload);
	gulp.watch('app/js/*.*', browserSync.reload);
});