(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "vinyl-paths", "gulp-load-plugins", "./paths", "./_gulp"], function (require, exports) {
    var vinylPaths = require("vinyl-paths");
    var gulpLoadPlugins = require("gulp-load-plugins");
    var paths = require("./paths");
    var _gulp_1 = require("./_gulp");
    $ = gulpLoadPlugins();
    _gulp_1.default.task("compile:styles", function () {
        // See https://github.com/ai/browserslist for more details on how to set
        // browser versions
        var AUTOPREFIXER_BROWSERS = ["last 2 versions"];
        return _gulp_1.default.src(paths.SRC_STYLE)
            .pipe($.changed(paths.TMP_DIR, { extension: ".css" }))
            .pipe(vinylPaths(function (paths) {
            $.util.log("Compiling " + paths + "\u2026");
            return Promise.resolve();
        }))
            .pipe($.sass({ outputStyle: "compressed" }).on("error", $.sass.logError))
            .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
            .pipe(_gulp_1.default.dest(paths.TMP_DIR));
    });
});
