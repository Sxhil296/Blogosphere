const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post")
const Comment = require('../models/Comment')
const bcrypt = require("bcrypt");
const verifyToken = require('../verifyToken')

//UPDATE USER
router.put("/:id", verifyToken, async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hashSync(req.body.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE USER
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        // also delete the posts made by the user
        await Post.deleteMany({userId : req.params.id})
        // also delete the comments made by the user
        await Comment.deleteMany({userId : req.params.id})
        res.sendStatus(200).json("User has been deleted!")

     
    } catch (error) {
      res.status(500).json(error);
    }
  });

//GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        //exclude the password
        const {password, ...info}=user._doc
        res.status(200).json(info)
     
    } catch (error) {
      res.status(500).json(error);
    }
  });


module.exports = router
