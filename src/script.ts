declare let $;

import gulpLoadPlugins = require("gulp-load-plugins");

import * as paths from "./paths";
import gulp from "./_gulp";


$ = gulpLoadPlugins();


gulp.task("js:lint", () => gulp.src(paths.SRC_SCRIPT)
  .pipe($.tslint())
  .pipe($.tslint.report("verbose"))
);


gulp.task("js:replace_paths", () => gulp.src(paths.BUILD_INDEX_JS)
  .pipe($.replace(paths.TMP_DIR, ""))
  .pipe(gulp.dest(paths.BUILD_DIR))
);
