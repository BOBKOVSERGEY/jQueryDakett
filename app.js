var bs = require("browser-sync").create();

//тут
bs.watch(['event/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./event"
});