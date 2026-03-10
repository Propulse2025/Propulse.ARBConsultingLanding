const { src, dest, series } = require("gulp");
const { rm } = require("fs/promises");

function clean() {
  return rm("dist", { recursive: true, force: true });
}

function copy() {
  return src("src/**/*", { encoding: false }).pipe(dest("dist"));
}

exports.build = series(clean, copy);
exports.default = exports.build;
