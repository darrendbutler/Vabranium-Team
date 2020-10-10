<<<<<<< HEAD
const GitHub = require("../services/github");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: { type: DataTypes.STRING, unqiue: true, allowNull: false },
      avatar_url: DataTypes.STRING,
      github_id: DataTypes.STRING
    },
    { sequelize }
  );

  User.associate = function(models) {
    // associations can be defined here
  };

  User.find_or_create_from_token = async function(access_token) {
    const data = await GitHub.get_user_from_token(access_token);

    /* Find existing user or create new User instances */
    const [instance, created] = await this.findOrCreate({
      raw: true,
      where: { username: data["login"] },
      defaults: {
        username: data["login"],
        avatar_url: data["avatar_url"],
        github_id: data["id"]
      }
    });

    return instance;
  };

  return User;
};
=======
const GitHub = require("../services/github");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: { type: DataTypes.STRING, unqiue: true, allowNull: false },
      avatar_url: DataTypes.STRING,
      github_id: DataTypes.STRING
    },
    { sequelize }
  );

  User.associate = function(models) {
    // associations can be defined here
  };

  User.find_or_create_from_token = async function(access_token) {
    const data = await GitHub.get_user_from_token(access_token);

    /* Find existing user or create new User instances */
    const [instance, created] = await this.findOrCreate({
      raw: true,
      where: { username: data["login"] },
      defaults: {
        username: data["login"],
        avatar_url: data["avatar_url"],
        github_id: data["id"]
      }
    });

    return instance;
  };

  return User;
};
>>>>>>> d0ddd9317cd99ea56f15f82b4ced42278d4d5b65
