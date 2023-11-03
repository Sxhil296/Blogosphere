const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");
const verifyToken = require('../verifyToken')


//CREATE COMMENT
router.post("/write", verifyToken, async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    return res.status(200).json(savedComment);
  } catch (err) {
    // console.log(err);
    return res.status(500).send(err);
  }
});

//UPDATE COMMENT
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE COMMENT
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("Comment has been deleted!")
  } catch (error) {
    res.status(500).json(error);
  }
});



//GET POST COMMENTS
router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
