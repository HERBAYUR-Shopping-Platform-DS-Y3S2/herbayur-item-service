// app.js

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

// routes
const items = require("./routes/items"); //use this when implementing routes

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use("/api/items", items); //use this when implementing routes

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5003;

app
  .use(express.static(path.join(__dirname, "/client/build")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
