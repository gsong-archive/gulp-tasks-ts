var browser_sync_1 = require('browser-sync');
var gulp_load_plugins_1 = require('gulp-load-plugins');
var run_sequence_1 = require('run-sequence');
require('./build');
require('./dist');
require('./script');
require('./style');
var paths = require('./paths');
var _gulp_1 = require('./_gulp');
var $ = gulp_load_plugins_1.default();
var BS_OPTIONS = {
    ghostMode: false,
    open: false,
    notify: false,
    port: 9000
};
var BS_SERVER_OPTIONS = {
    baseDir: [paths.SRC_DIR, paths.TMP_DIR],
    middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    }
};
function reportChange(event) {
    $.util.log("File " + event.path + " was " + event.type + ", running tasks\u2026");
}
function _serve(baseDir, reloadTasks, done) {
    var serverOpts = Object.assign({}, BS_SERVER_OPTIONS, { baseDir: baseDir });
    var opts = Object.assign({}, BS_OPTIONS, { server: serverOpts });
    browser_sync_1.default(opts, done);
    return _gulp_1.default.watch(paths.SRC_ALL, reloadTasks).on('change', reportChange);
}
_gulp_1.default.task('reload', function () { return browser_sync_1.default.reload(); });
_gulp_1.default.task('reload:build', function (callback) {
    return run_sequence_1.default('build', 'reload', callback);
});
_gulp_1.default.task('reload:dist', function (callback) {
    return run_sequence_1.default('dist', 'reload', callback);
});
_gulp_1.default.task('serve:dev', [
    'build:make-settings', 'compile:styles', 'js:lint'
], function (done) {
    var opts = Object.assign({}, BS_OPTIONS, { server: BS_SERVER_OPTIONS });
    browser_sync_1.default(opts, done);
    _gulp_1.default.watch(paths.SRC_HTML, ['reload']).on('change', reportChange);
    _gulp_1.default.watch(paths.SRC_SCRIPT, ['js:lint', 'reload'])
        .on('change', reportChange);
    _gulp_1.default.watch(paths.SRC_STYLE, ['compile:styles', 'reload'])
        .on('change', reportChange);
});
_gulp_1.default.task('serve:build', ['build'], function (done) {
    _serve([paths.BUILD_DIR], ['reload:build'], done);
});
_gulp_1.default.task('serve:dist', ['dist'], function (done) {
    _serve([paths.DIST_DIR], ['reload:dist'], done);
});
