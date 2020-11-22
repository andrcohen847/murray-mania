const router = require("express").Router();
const { User, Topic, Post, Score, Reply, Like } = require("../db/models");

module.exports = router;

//FIND USERS ROUTE
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "email"],
      include: [Topic]
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// FIND SINGLE USER ROUTE /api/users/usersprofile/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId,  {
      include: [Post, Topic, Score, Reply, Like ]
    })
    res.json(user)
  } catch (error) {
    next(error)
  }
})

//EDIT PROFILE ROUTE API - users/userprofile/:userId
router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: [Post, Topic, Score, Reply, Like ]
    })
    if (!user) return res.sendStatus(404)
    const updatedUser = await user.update(req.body)
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
})

  //DELETE ROUTE - users/userprofile/:userId
  router.delete('/:userId', async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId)
      if (!user) return res.sendStatus(404)
      await user.destroy()
      res.sendStatus(204)
    } catch (err) {
      next(err)
    }
  })
