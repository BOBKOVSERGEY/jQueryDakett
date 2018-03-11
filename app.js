var bs = require("browser-sync").create();

//тут
bs.watch(['vizualnye-effecty/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./vizualnye-effecty"
});