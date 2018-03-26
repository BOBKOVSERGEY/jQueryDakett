var bs = require("browser-sync").create();

//тут
bs.watch(['ajax-jquery/example/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./ajax-jquery/example/"
});