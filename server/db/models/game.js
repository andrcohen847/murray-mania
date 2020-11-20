const Sequelize = require("sequelize");
const db = require("../db");

const Game = db.define("game", {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.STRING
  }
});

module.exports = Game;
