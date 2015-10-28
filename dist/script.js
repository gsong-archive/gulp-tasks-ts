var gulpLoadPlugins = require("gulp-load-plugins");
var paths = require("./paths");
var _gulp_1 = require("./_gulp");
$ = gulpLoadPlugins();
_gulp_1.default.task("js:lint", function () { return _gulp_1.default.src(paths.SRC_SCRIPT)
    .pipe($.tslint())
    .pipe($.tslint.report("verbose")); });
_gulp_1.default.task("js:replace_paths", function () { return _gulp_1.default.src(paths.BUILD_INDEX_JS)
    .pipe($.replace(paths.TMP_DIR, ""))
    .pipe(_gulp_1.default.dest(paths.BUILD_DIR)); });
