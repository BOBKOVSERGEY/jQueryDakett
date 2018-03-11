var bs = require("browser-sync").create();

//тут
bs.watch(['search-elements/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./search-elements"
});