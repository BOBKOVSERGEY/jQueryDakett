var bs = require("browser-sync").create();

//тут
bs.watch(['work-with-form/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./work-with-form"
});