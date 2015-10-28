(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "./build", "./clean", "./dist", "./paths", "./publish", "./script", "./serve", "./style", "./utils"], function (require, exports) {
    var build_1 = require("./build");
    exports.makeSettings = build_1.makeSettings;
    require("./clean");
    require("./dist");
    require("./paths");
    require("./publish");
    require("./script");
    require("./serve");
    require("./style");
    require("./utils");
});
