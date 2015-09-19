var gulp = require('gulp'),
	// Plugins:
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');

function handleError (err) {
	console.log(err.toString());
	this.emit('end');
}

gulp.task('sass', function() {
	return gulp
		.src('app/assets/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', handleError))
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/assets/css'));
});

gulp.task('build', ['sass']);

gulp.task('serve', function() {
	connect.server({
		root: 'app',
		port: 9000,
		livereload: true
	});
});

gulp.task('reload', function() {
	return gulp
		.src('app/*.html', {read: false})
		.pipe(connect.reload());
});

gulp.task('watch', ['sass'], function() {
	gulp.watch('app/assets/scss/**', ['sass']);
	gulp.watch('app/*.html', ['reload']);
});

gulp.task('default', ['serve', 'watch']);
