var path_1 = require('path');
exports.BUILD_DIR = 'build/';
exports.DIST_DIR = 'dist/';
exports.SRC_DIR = 'src/';
exports.TMP_DIR = '.tmp/';
exports.BUILD_ALL = path_1.default.join(exports.BUILD_DIR, '**/*');
exports.SRC_ALL = path_1.default.join(exports.SRC_DIR, '**/*');
exports.SRC_HTML = path_1.default.join(exports.SRC_DIR, '**/*.html');
exports.SRC_INDEX_HTML = path_1.default.join(exports.SRC_DIR, 'index.html');
exports.SRC_SCRIPT = path_1.default.join(exports.SRC_DIR, '**/*.js');
exports.SRC_STYLE = path_1.default.join(exports.SRC_DIR, '**/*.scss');
exports.TMP_IMAGE = path_1.default.join(exports.TMP_DIR, '**/*.+(png|jpg|svg)');
// Build time internal app paths
var INDEX_SCRIPT_BASE = 'index';
exports.INDEX_SCRIPT = INDEX_SCRIPT_BASE + ".js";
exports.BUILD_INDEX_JS = path_1.default.join(exports.BUILD_DIR, exports.INDEX_SCRIPT);
exports.TMP_INDEX_JS = path_1.default.join(exports.TMP_DIR, INDEX_SCRIPT_BASE);
exports.SETTINGS = 'config/settings.js';
