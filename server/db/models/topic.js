const Sequelize = require("sequelize");
const db = require("../db");

const Topic = db.define("topic", {
  topic: {
    type: Sequelize.TEXT
  }
});

module.exports = Topic;
