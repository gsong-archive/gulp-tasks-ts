(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "del", "vinyl-paths", "./paths", "./_gulp"], function (require, exports) {
    var del = require("del");
    var vinylPaths = require("vinyl-paths");
    var paths = require("./paths");
    var _gulp_1 = require("./_gulp");
    _gulp_1.default.task("clean:tmp", function () { return _gulp_1.default.src([paths.TMP_DIR])
        .pipe(vinylPaths(del)); });
    _gulp_1.default.task("clean:build", function () { return _gulp_1.default.src([paths.BUILD_DIR])
        .pipe(vinylPaths(del)); });
    _gulp_1.default.task("clean:dist", function () { return _gulp_1.default.src([paths.DIST_DIR])
        .pipe(vinylPaths(del)); });
});
