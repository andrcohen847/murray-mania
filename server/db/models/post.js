const Sequelize = require("sequelize");
const db = require("../db");

const Post = db.define("post", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Post;
