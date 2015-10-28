var childProcess = require("child_process");
var _gulp_1 = require("./_gulp");
_gulp_1.default.task("gulpfile:build", function (cb) {
    childProcess.exec("tsc", function (err) { return cb(err); });
});
