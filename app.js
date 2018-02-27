var bs = require("browser-sync").create();

//тут
bs.watch(['work-with-kazdym-elementom-vyborki/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./work-with-kazdym-elementom-vyborki"
});