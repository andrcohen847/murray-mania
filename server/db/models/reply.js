const Sequelize = require("sequelize");
const db = require("../db");

const Reply = db.define("reply", {
  reply: {
    type: Sequelize.TEXT
  }
});

module.exports = Reply;
