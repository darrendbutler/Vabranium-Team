<<<<<<< HEAD
const controllers = require("./controllers");
const config = require("../config");

module.exports.registerRoutes = app => {
  app.use("/", controllers.home);
  app.use("/auth", controllers.auth);
  app.use("/tutorial", controllers.tutorial);
};

module.exports.registerErrorHandlers = app => {
  app.use(function(err, req, res, next) {
    console.error(err.message);
    res.status(err.status || 500);
    res.render("500", {
      message: err.message,
      error: config.env === "development" ? err : {}
    });
  });
};
=======
const controllers = require("./controllers");
const config = require("../config");

module.exports.registerRoutes = app => {
  app.use("/", controllers.home);
  app.use("/auth", controllers.auth);
  app.use("/tutorial", controllers.tutorial);
};

module.exports.registerErrorHandlers = app => {
  app.use(function(err, req, res, next) {
    console.error(err.message);
    res.status(err.status || 500);
    res.render("500", {
      message: err.message,
      error: config.env === "development" ? err : {}
    });
  });
};
>>>>>>> d0ddd9317cd99ea56f15f82b4ced42278d4d5b65
