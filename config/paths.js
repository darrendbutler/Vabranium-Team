<<<<<<< HEAD
const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  staticEntry: resolveApp("app/static")
};
=======
const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  staticEntry: resolveApp("app/static")
};
>>>>>>> d0ddd9317cd99ea56f15f82b4ced42278d4d5b65
