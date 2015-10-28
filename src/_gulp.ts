declare let $;

import * as gulp from "gulp";
import gulpLoadPlugins = require("gulp-load-plugins");


const _gulpsrc = gulp.src;
$ = gulpLoadPlugins();

gulp.src = (globs, options) => _gulpsrc.apply(gulp, [globs, options])
.pipe($.plumber({
  errorHandler: function(err) {
    $.notify.onError({
      title: err.name, message: err.message, sound: "Sosumi"
    })(err);
    this.emit("end");
  }
}));


export default gulp;
