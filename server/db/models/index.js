const User = require("./user");
const Score = require("./score");
const Game = require("./game");
const Like = require("./like");
const Post = require("./post");
const Topic = require("./topic");
const Reply = require("./reply");

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

User.hasMany(Score);
User.belongsTo(Game);
User.hasMany(Topic)
User.hasMany(Post)
User.hasMany(Reply)
User.hasMany(Like)

Game.hasMany(User);
Game.hasMany(Score);

Score.belongsTo(Game);
Score.belongsTo(User);

Topic.belongsTo(User);
Topic.hasMany(Post);

Post.belongsTo(User)
Post.belongsTo(Topic)
Post.hasMany(Reply)
Post.hasMany(Like)

Reply.belongsTo(User)
Reply.belongsTo(Post)
Reply.hasMany(Reply)
Reply.hasMany(Like)

Like.belongsTo(User)
Like.belongsTo(Post)
Like.belongsTo(Reply)



module.exports = {
  User,
  Game,
  Score,
  Like,
  Post,
  Topic,
  Reply,
};
