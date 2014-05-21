var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function (callback) {
    gulp.src('lib/js-ood.js')
    .pipe(browserify({
        standalone: 'ood'
    }))
    .pipe(gulp.dest('./build'));
});
