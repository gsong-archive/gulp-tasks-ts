var del_1 = require('del');
var vinyl_paths_1 = require('vinyl-paths');
var paths = require('./paths');
var _gulp_1 = require('./_gulp');
_gulp_1.default.task('clean:tmp', function () { return _gulp_1.default.src([paths.TMP_DIR])
    .pipe(vinyl_paths_1.default(del_1.default)); });
_gulp_1.default.task('clean:build', function () { return _gulp_1.default.src([paths.BUILD_DIR])
    .pipe(vinyl_paths_1.default(del_1.default)); });
_gulp_1.default.task('clean:dist', function () { return _gulp_1.default.src([paths.DIST_DIR])
    .pipe(vinyl_paths_1.default(del_1.default)); });
