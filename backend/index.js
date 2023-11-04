const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");
const commentRoute = require("./routes/comments.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path = require('path')

const app = express();

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database is connected!");
  } catch (err) {
    console.log(err);
  }
};

//middlewares
dotenv.config();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static(path.join(__dirname, "/images")))
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

//image upload using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    // let extArray = file.originalname.split(".");
    // let newFileName = `${Date.now()}.${extArray[extArray.length - 1]}`;
    // req.body["filename"] = newFileName;
    // cb(null, newFileName);
    cb(null,req.body.img)
  },
});
const upload = multer({ storage:storage });
app.post('/api/upload', upload.single('file'), (req, res)=>{
  // res.status(200).json(`File uploaded successfully! ${req.file.path}`)
  res.status(200).json(`Image has been uploaded successfully!`)
  })

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("App is running on port " + process.env.PORT);
});
