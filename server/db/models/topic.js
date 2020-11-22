const Sequelize = require("sequelize");
const db = require("../db");

const Topic = db.define("topic", {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Topic;
