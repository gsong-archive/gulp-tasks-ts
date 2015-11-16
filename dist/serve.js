var browserSync = require("browser-sync");
var runSequence = require("run-sequence");
var gulpLoadPlugins = require("gulp-load-plugins");
require("./build");
require("./dist");
require("./gulpfile");
require("./script");
require("./style");
var paths = require("./paths");
var _gulp_1 = require("./_gulp");
$ = gulpLoadPlugins();
var BS_OPTIONS = {
    ghostMode: false,
    open: false,
    notify: false,
    port: 9000
};
var BS_SERVER_OPTIONS = {
    baseDir: [paths.SRC_DIR, paths.TMP_DIR],
    middleware: function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        next();
    }
};
function reportChange(event) {
    $.util.log("File " + event.path + " was " + event.type + ", running tasks\u2026");
}
function _serve(baseDir, reloadTasks, done) {
    var serverOpts = Object.assign({}, BS_SERVER_OPTIONS, { baseDir: baseDir });
    var opts = Object.assign({}, BS_OPTIONS, { server: serverOpts });
    browserSync(opts, done);
    return _gulp_1.default.watch(paths.SRC_ALL, reloadTasks).on("change", reportChange);
}
_gulp_1.default.task("reload", function () { return browserSync.reload(); });
_gulp_1.default.task("reload:build", function (callback) {
    return runSequence("build", "reload", callback);
});
_gulp_1.default.task("reload:dist", function (callback) {
    return runSequence("dist", "reload", callback);
});
_gulp_1.default.task("serve:dev", [
    "build:make-settings", "compile:styles", "js:lint"
], function (done) {
    var opts = Object.assign({}, BS_OPTIONS, { server: BS_SERVER_OPTIONS });
    browserSync(opts, done);
    _gulp_1.default.watch(paths.SRC_HTML, ["reload"]).on("change", reportChange);
    _gulp_1.default.watch(paths.SRC_SCRIPT_ALL, ["js:lint", "reload"])
        .on("change", reportChange);
    _gulp_1.default.watch(paths.SRC_STYLE_ALL, ["compile:styles", "reload"])
        .on("change", reportChange);
    _gulp_1.default.watch(paths.GULP_FILES, ["gulpfile:build", "reload"])
        .on("change", reportChange);
});
_gulp_1.default.task("serve:build", ["build"], function (done) {
    _serve([paths.BUILD_DIR], ["reload:build"], done);
});
_gulp_1.default.task("serve:dist", ["dist"], function (done) {
    _serve([paths.DIST_DIR], ["reload:dist"], done);
});
