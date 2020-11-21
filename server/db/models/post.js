const Sequelize = require("sequelize");
const db = require("../db");

const Post = db.define("post", {
  post: {
    type: Sequelize.TEXT
  }
});

module.exports = Post;
