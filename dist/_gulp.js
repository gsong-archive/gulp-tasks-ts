var gulp_1 = require('gulp');
var gulp_load_plugins_1 = require('gulp-load-plugins');
var $ = gulp_load_plugins_1.default();
var _gulpsrc = gulp_1.default.src;
gulp_1.default.src = function (globs, options) { return _gulpsrc.apply(gulp_1.default, [globs, options])
    .pipe($.plumber({
    errorHandler: function (err) {
        $.notify.onError({
            title: err.name, message: err.message, sound: 'Sosumi'
        })(err);
        this.emit('end');
    }
})); };
