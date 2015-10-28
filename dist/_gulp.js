(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "gulp", "gulp-load-plugins"], function (require, exports) {
    var gulp = require("gulp");
    var gulpLoadPlugins = require("gulp-load-plugins");
    var _gulpsrc = gulp.src;
    $ = gulpLoadPlugins();
    gulp.src = function (globs, options) { return _gulpsrc.apply(gulp, [globs, options])
        .pipe($.plumber({
        errorHandler: function (err) {
            $.notify.onError({
                title: err.name, message: err.message, sound: "Sosumi"
            })(err);
            this.emit("end");
        }
    })); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = gulp;
});
