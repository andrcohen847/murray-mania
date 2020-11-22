const Sequelize = require("sequelize");
const db = require("../db");

const Like = db.define("like", {
  likes: {
    type: Sequelize.INTEGER
  },
  dislikes: {
    type: Sequelize.INTEGER
  }
});

module.exports = Like;
