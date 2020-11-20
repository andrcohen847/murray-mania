const Sequelize = require("sequelize");
const db = require("../db");

const HighScore = db.define("high score", {
  score: {
    type: Sequelize.INTEGER
  }
});

module.exports = HighScore;
