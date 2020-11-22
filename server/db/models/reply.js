const Sequelize = require("sequelize");
const db = require("../db");

const Reply = db.define("reply", {
  comment: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Reply;
