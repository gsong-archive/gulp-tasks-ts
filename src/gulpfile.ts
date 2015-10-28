import * as childProcess from "child_process";

import gulp from "./_gulp";


gulp.task("gulpfile:build", (cb) => {
  childProcess.exec("tsc", (err) => cb(err));
});
