(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "gh-pages", "./dist", "./paths", "./_gulp"], function (require, exports) {
    var ghpages = require("gh-pages");
    require("./dist");
    var paths = require("./paths");
    var _gulp_1 = require("./_gulp");
    _gulp_1.default.task("publish", ["dist"], function () { return ghpages.publish(paths.DIST_DIR, function () { }); });
});
