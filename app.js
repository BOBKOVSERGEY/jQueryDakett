var bs = require("browser-sync").create();

//тут
bs.watch(['work-css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./work-css"
});