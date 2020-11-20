const User = require("./user");
const HighScore = require("./high-score");
const Game = require("./game");

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasOne(HighScore);
User.belongsTo(Game);

Game.hasMany(User);
Game.hasOne(HighScore);

HighScore.belongsTo(Game);
HighScore.belongsTo(User);

module.exports = {
  User,
  Game,
  HighScore
};
