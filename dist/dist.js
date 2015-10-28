(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "gulp-load-plugins", "run-sequence", "./build", "./clean", "./script", "./utils", "./paths", "./_gulp"], function (require, exports) {
    var gulpLoadPlugins = require("gulp-load-plugins");
    var runSequence = require("run-sequence");
    require("./build");
    require("./clean");
    require("./script");
    require("./utils");
    var paths = require("./paths");
    var _gulp_1 = require("./_gulp");
    $ = gulpLoadPlugins();
    _gulp_1.default.task("dist:post-jspm", function () { return _gulp_1.default.src(paths.BUILD_INDEX_JS)
        .pipe($.replace(/(angular.bootstrap.*strictDi:\s*)(false)/g, "$1true"))
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(_gulp_1.default.dest(paths.BUILD_DIR)); });
    _gulp_1.default.task("dist:js", function (callback) { return runSequence("build:jspm", "dist:post-jspm", "js:replace_paths", callback); });
    _gulp_1.default.task("dist:html", function () { return _gulp_1.default.src(paths.SRC_INDEX_HTML)
        .pipe($.htmlReplace({ "js": paths.INDEX_SCRIPT }))
        .pipe($.minifyHtml({ empty: true }))
        .pipe(_gulp_1.default.dest(paths.BUILD_DIR)); });
    _gulp_1.default.task("dist:copy", function () {
        var htmlFilter = $.filter("**/*.!(html)", { restore: true });
        return _gulp_1.default.src(paths.BUILD_ALL)
            .pipe(htmlFilter)
            .pipe($.rev())
            .pipe(htmlFilter.restore)
            .pipe($.revReplace())
            .pipe(_gulp_1.default.dest(paths.DIST_DIR))
            .pipe($.gzip())
            .pipe(_gulp_1.default.dest(paths.DIST_DIR));
    });
    _gulp_1.default.task("dist", function (callback) { return runSequence(["clean:build", "clean:dist", "build:make-settings", "utils:copy_to_tmp"], ["dist:js", "dist:html", "build:images"], "dist:copy", callback); });
});
