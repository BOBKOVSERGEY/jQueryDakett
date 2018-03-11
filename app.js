var bs = require("browser-sync").create();

//тут
bs.watch(['example/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./example"
});