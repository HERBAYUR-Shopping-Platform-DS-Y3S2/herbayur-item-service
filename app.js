// app.js

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
const multer = require('multer');

// routes
const items = require("./routes/items"); //use this when implementing routes
const user = require("./routes/User"); //use this when implementing routes

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use("/api/items", items); //use this when implementing routes
app.use("/api/user", user); //use this when implementing routes

app.use(express.json({ extended: false }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const update = multer({ storage: storage });
app.put("/update", update.single("file"), (req, res) => {
  res.status(200).json("File has been updated");
});

app.use(cors())
app.use("/images", express.static(path.join(__dirname, "/images")));

app.post('/image', upload.single('file'), function (req, res) {
  res.json({})
})

const PORT = process.env.PORT || 5003;

app
  .use(express.static(path.join(__dirname, "/client/build")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
