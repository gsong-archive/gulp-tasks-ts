var gulp_load_plugins_1 = require('gulp-load-plugins');
var run_sequence_1 = require('run-sequence');
require('./build');
require('./clean');
require('./script');
require('./utils');
var paths = require('./paths');
var _gulp_1 = require('./_gulp');
var $ = gulp_load_plugins_1.default();
_gulp_1.default.task('dist:post-jspm', function () { return _gulp_1.default.src(paths.BUILD_INDEX_JS)
    .pipe($.replace(/(angular.bootstrap.*strictDi:\s*)(false)/g, '$1true'))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(_gulp_1.default.dest(paths.BUILD_DIR)); });
_gulp_1.default.task('dist:js', function (callback) { return run_sequence_1.default('build:jspm', 'dist:post-jspm', 'js:replace_paths', callback); });
_gulp_1.default.task('dist:html', function () { return _gulp_1.default.src(paths.SRC_INDEX_HTML)
    .pipe($.htmlReplace({ 'js': paths.INDEX_SCRIPT }))
    .pipe($.minifyHtml({ empty: true }))
    .pipe(_gulp_1.default.dest(paths.BUILD_DIR)); });
_gulp_1.default.task('dist:copy', function () {
    var htmlFilter = $.filter('**/*.!(html)', { restore: true });
    return _gulp_1.default.src(paths.BUILD_ALL)
        .pipe(htmlFilter)
        .pipe($.rev())
        .pipe(htmlFilter.restore)
        .pipe($.revReplace())
        .pipe(_gulp_1.default.dest(paths.DIST_DIR))
        .pipe($.gzip())
        .pipe(_gulp_1.default.dest(paths.DIST_DIR));
});
_gulp_1.default.task('dist', function (callback) { return run_sequence_1.default(['clean:build', 'clean:dist', 'build:make-settings', 'utils:copy_to_tmp'], ['dist:js', 'dist:html', 'build:images'], 'dist:copy', callback); });
