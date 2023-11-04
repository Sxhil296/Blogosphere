const express = require("express");

const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("User not found!");
    }
    const validPassword = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send("Wrong Credentials!");
    }

    // create token
    // const payload = {
    //   id: user._id,
    //   name: user.name,
    // };
    // let token = jwt.sign(payload, "secretKey", { expiresIn: "3h" });
    // res.cookie("authToken", token, { httpOnly: false }).sendStatus(200);

    const token = jwt.sign({ id: user._id, username:user.username, email:user.email }, process.env.SECRET, {
      expiresIn: "3d",
    });
    const { password, ...info } = user._doc; //to exclude the password
    res.cookie("token", token).status(200).json(info);

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//LOGOUT
router.get('/logout', async (req, res)=>{
  try {
    res.clearCookie('token', {sameSite:"none",secure:true}).status(200).send("User logged out successfully!")
  } catch (error) {
    res.status(500).json(error)
  }
})

//REFETCH USER
router.get("/refetch",(req, res) => {
  const token = req.cookies.token
  jwt.verify(token, process.env.SECRET, {}, async(err, data)=>{
    if(err){
      return res.status(404).json(err)
    }
    res.status(200).json(data)
  })
})


module.exports = router;
