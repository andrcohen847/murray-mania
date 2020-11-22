const router = require("express").Router();
const { User, Topic, Post, Score, Reply, Like } = require("../db/models");

module.exports = router;




//FIND POSTS ROUTE /api/posts
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: [User, Reply]
    })
    res.json(posts)
  } catch (err) {
    next(err)
  }
})

// FIND SINGLE POST ROUTE /api/posts/:postId
router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.postId,  {
      include: [User, Reply]
    })
    res.json(post)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create(req.body)
    res.status(201).json(post)
  } catch (err) {
    console.error(err)
    next(err)
  }
})

//EDIT POST ROUTE API - /api/posts/:postId
router.put('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.postId, {
      include: [Reply]
    })
    if (!post) return res.sendStatus(404)
    const updatedPost = await post.update(req.body)
    res.status(200).json(updatedPost)
  } catch (err) {
    next(err)
  }
})

  //DELETE POST ROUTE - /api/posts/:postId
  router.delete('/:postId', async (req, res, next) => {
    try {
      const post = await Post.findByPk(req.params.postId)
      if (!post) return res.sendStatus(404)
      await post.destroy()
      res.sendStatus(204)
    } catch (err) {
      next(err)
    }
  })
