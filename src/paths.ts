import * as path from "path";


export const BUILD_DIR = "build/";
export const DIST_DIR = "dist/";
export const SRC_DIR = "src/";
export const TMP_DIR = ".tmp/";

export const BUILD_ALL = path.join(BUILD_DIR, "**/*");

export const SRC_ALL = path.join(SRC_DIR, "**/*");
export const SRC_HTML = path.join(SRC_DIR, "**/*.html");
export const SRC_INDEX_HTML = path.join(SRC_DIR, "index.html");
export const SRC_SCRIPT = [
  `!${path.join(SRC_DIR, "{jspm_packages,typings}/**/*")}`,
  path.join(SRC_DIR, "**/*.ts")
];
export const SRC_SCRIPT_ALL = path.join(SRC_DIR, "**/*.{js,ts}");
export const SRC_STYLE = path.join(SRC_DIR, "**/*.scss");

export const TMP_IMAGE = path.join(TMP_DIR, "**/*.+(png|jpg|svg)");

export const GULP_FILES = [
  "gulpfile.babel.ts",
  path.join(SRC_DIR, "config/environments.ts")
];

// Build time internal app paths
export const INDEX_SCRIPT_BASE = "index";
export const INDEX_SCRIPT = `${INDEX_SCRIPT_BASE}.js`;
export const BUILD_INDEX_JS = path.join(BUILD_DIR, INDEX_SCRIPT);
export const TMP_INDEX_JS = path.join(TMP_DIR, INDEX_SCRIPT_BASE);
export const SETTINGS = path.join(SRC_DIR, "config/settings.ts");
