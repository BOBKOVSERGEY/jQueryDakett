var bs = require("browser-sync").create();

//тут
bs.watch(['obhod-dom/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./obhod-dom"
});