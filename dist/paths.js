var path = require("path");
exports.BUILD_DIR = "build/";
exports.DIST_DIR = "dist/";
exports.SRC_DIR = "src/";
exports.TMP_DIR = ".tmp/";
exports.BUILD_ALL = path.join(exports.BUILD_DIR, "**/*");
exports.SRC_ALL = path.join(exports.SRC_DIR, "**/*");
exports.SRC_HTML = path.join(exports.SRC_DIR, "**/*.html");
exports.SRC_INDEX_HTML = path.join(exports.SRC_DIR, "index.html");
exports.SRC_SCRIPT = [
    ("!" + path.join(exports.SRC_DIR, "{jspm_packages,typings}/**/*")),
    path.join(exports.SRC_DIR, "**/*.ts")
];
exports.SRC_SCRIPT_ALL = path.join(exports.SRC_DIR, "**/*.{js,ts}");
exports.SRC_STYLE = path.join(exports.SRC_DIR, "**/*.scss");
exports.TMP_IMAGE = path.join(exports.TMP_DIR, "**/*.+(png|jpg|svg)");
var INDEX_SCRIPT_BASE = "index";
exports.INDEX_SCRIPT = INDEX_SCRIPT_BASE + ".js";
exports.BUILD_INDEX_JS = path.join(exports.BUILD_DIR, exports.INDEX_SCRIPT);
exports.TMP_INDEX_JS = path.join(exports.TMP_DIR, INDEX_SCRIPT_BASE);
exports.SETTINGS = path.join(exports.SRC_DIR, "config/settings.ts");
