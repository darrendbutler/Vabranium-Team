<<<<<<< HEAD
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "development",
  secretKey: process.env.SECRET_KEY || "octocat",
  githubClientId: process.env.GITHUB_CLIENT_ID || "",
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET || ""
};
=======
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "development",
  secretKey: process.env.SECRET_KEY || "octocat",
  githubClientId: process.env.GITHUB_CLIENT_ID || "",
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET || ""
};
>>>>>>> d0ddd9317cd99ea56f15f82b4ced42278d4d5b65
