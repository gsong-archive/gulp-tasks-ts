var paths = require('./paths');
var _gulp_1 = require('./_gulp');
_gulp_1.default.task('utils:copy_to_tmp', ['clean:tmp'], function () { return _gulp_1.default.src(paths.SRC_ALL)
    .pipe(_gulp_1.default.dest(paths.TMP_DIR)); });
