var gh_pages_1 = require('gh-pages');
require('./dist');
var paths = require('./paths');
var _gulp_1 = require('./_gulp');
_gulp_1.default.task('publish', ['dist'], function () { return gh_pages_1.default.publish(paths.DIST_DIR, function () { }); });
