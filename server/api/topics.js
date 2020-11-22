const router = require("express").Router();
const { User, Topic, Post, Score, Reply, Like } = require("../db/models");

module.exports = router;




//FIND TOPICS ROUTE /api/topics
router.get('/', async (req, res, next) => {
  try {
    const topics = await Topic.findAll({
      include: [Post]
    })
    res.json(topics)
  } catch (err) {
    next(err)
  }
})

// FIND SINGLE TOPIC ROUTE /api/topics/:topicId
router.get('/:topicId', async (req, res, next) => {
  try {
    const topic = await Topic.findByPk(req.params.topicId,  {
      include: [Post]
    })
    res.json(topic)
  } catch (error) {
    next(error)
  }
})

//EDIT TOPIC ROUTE API - /api/topics/:topicId
router.put('/:topicd', async (req, res, next) => {
  try {
    const topic = await Topic.findByPk(req.params.topicId, {
      include: [Post]
    })
    if (!topic) return res.sendStatus(404)
    const updatedTopic = await topic.update(req.body)
    res.status(200).json(updatedTopic)
  } catch (err) {
    next(err)
  }
})

  //DELETE TOPIC ROUTE - /api/topics/:topicId
  router.delete('/:topicId', async (req, res, next) => {
    try {
      const topic = await Topic.findByPk(req.params.topicId)
      if (!topic) return res.sendStatus(404)
      await topic.destroy()
      res.sendStatus(204)
    } catch (err) {
      next(err)
    }
  })
