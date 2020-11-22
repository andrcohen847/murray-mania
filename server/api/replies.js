const router = require("express").Router();
const { User, Topic, Post, Score, Reply, Like } = require("../db/models");

module.exports = router;




//FIND REPLIES ROUTE /api/replies
router.get('/', async (req, res, next) => {
  try {
    const replies = await Reply.findAll({
      include: [User]
    })
    res.json(replies)
  } catch (err) {
    next(err)
  }
})

// FIND SINGLE REPLY ROUTE /api/replies/:replyId
router.get('/:replyId', async (req, res, next) => {
  try {
    const reply = await Reply.findByPk(req.params.replyId,  {
      include: [User]
    })
    res.json(reply)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const reply = await Reply.create(req.body)
    res.status(201).json(reply)
  } catch (err) {
    console.error(err)
    next(err)
  }
})

//EDIT REPLY ROUTE API - /api/replies/:replyId
router.put('/:replyId', async (req, res, next) => {
  try {
    const reply = await Reply.findByPk(req.params.preplyId, {
      include: [User]
    })
    if (!reply) return res.sendStatus(404)
    const updatedReply = await reply.update(req.body)
    res.status(200).json(updatedReply)
  } catch (err) {
    next(err)
  }
})

  //DELETE REPLY ROUTE - /api/replies/:replyId
  router.delete('/:replyId', async (req, res, next) => {
    try {
      const reply = await Reply.findByPk(req.params.replyId)
      if (!reply) return res.sendStatus(404)
      await reply.destroy()
      res.sendStatus(204)
    } catch (err) {
      next(err)
    }
  })
