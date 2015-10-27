var gulp_load_plugins_1 = require('gulp-load-plugins');
var vinyl_paths_1 = require('vinyl-paths');
var paths = require('./paths');
var _gulp_1 = require('./_gulp');
var $ = gulp_load_plugins_1.default();
_gulp_1.default.task('compile:styles', function () {
    // See https://github.com/ai/browserslist for more details on how to set
    // browser versions
    var AUTOPREFIXER_BROWSERS = ['last 2 versions'];
    return _gulp_1.default.src(paths.SRC_STYLE)
        .pipe($.changed(paths.TMP_DIR, { extension: '.css' }))
        .pipe(vinyl_paths_1.default(function (paths) {
        $.util.log("Compiling " + paths + "\u2026");
        return Promise.resolve();
    }))
        .pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(_gulp_1.default.dest(paths.TMP_DIR));
});
