var gulp_load_plugins_1 = require('gulp-load-plugins');
var paths = require('./paths');
var _gulp_1 = require('./_gulp');
var $ = gulp_load_plugins_1.default();
_gulp_1.default.task('js:lint', function () { return _gulp_1.default.src(paths.SRC_SCRIPT)
    .pipe($.eslint())
    .pipe($.eslint.formatEach())
    .pipe($.eslint.failAfterError()); });
_gulp_1.default.task('js:replace_paths', function () { return _gulp_1.default.src(paths.BUILD_INDEX_JS)
    .pipe($.replace(paths.TMP_DIR, ''))
    .pipe(_gulp_1.default.dest(paths.BUILD_DIR)); });
