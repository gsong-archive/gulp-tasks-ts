(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "path"], function (require, exports) {
    var path = require("path");
    exports.BUILD_DIR = "build/";
    exports.DIST_DIR = "dist/";
    exports.SRC_DIR = "src/";
    exports.TMP_DIR = ".tmp/";
    exports.BUILD_ALL = path.join(exports.BUILD_DIR, "**/*");
    exports.SRC_ALL = path.join(exports.SRC_DIR, "**/*");
    exports.SRC_HTML = path.join(exports.SRC_DIR, "**/*.html");
    exports.SRC_INDEX_HTML = path.join(exports.SRC_DIR, "index.html");
    exports.SRC_SCRIPT = path.join(exports.SRC_DIR, "**/*.js");
    exports.SRC_STYLE = path.join(exports.SRC_DIR, "**/*.scss");
    exports.TMP_IMAGE = path.join(exports.TMP_DIR, "**/*.+(png|jpg|svg)");
    // Build time internal app paths
    var INDEX_SCRIPT_BASE = "index";
    exports.INDEX_SCRIPT = INDEX_SCRIPT_BASE + ".js";
    exports.BUILD_INDEX_JS = path.join(exports.BUILD_DIR, exports.INDEX_SCRIPT);
    exports.TMP_INDEX_JS = path.join(exports.TMP_DIR, INDEX_SCRIPT_BASE);
    exports.SETTINGS = "config/settings.js";
});
