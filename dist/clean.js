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
