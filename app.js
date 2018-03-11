var bs = require("browser-sync").create();

//тут
bs.watch(['vyrezanie-kopirovanie-el/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./vyrezanie-kopirovanie-el"
});