// We will want to look into using gulp
// Checkout Chases gulpfile.js and this website brandonclapp.com/what-is-gulp-js-and-why-use-it/

var gulp = require('gulp');
var sass = require('gulp-sass');
var start = require('gulp-connect');

gulp.task('styles', function() {
	gulp.src('./client/assets/materialize-src/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./client/assets/css/'));
});

gulp.task('start', function () {
	//Hopefully this would watch those sass files and recompile if they changed
	gulp.watch('./client/assets/materialize-src/sass/*.scss',['styles']);
	gulp.watch('./client/assets/sass/*.scss',['styles']);
	//and also start the server.
	start.server({
		root: './client/',
		port: 1337,
		hostname: '0.0.0.0'
	});
});
