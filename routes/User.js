const express = require("express");
const router = express.Router();

const Book = require("../models/Item");
const User = require("../models/User");

router.get("/test", (req, res) => res.send("user route testing!"));

router.get("/", (req, res) => {
  User.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({ noitemsfound: "No user found" }));
});

// @route GET api/items/:id
// @description Get single item by id
// @access Public
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ noitemfound: "No user found" }));
});

// @route POST api/items
// @description add/save item
// @access Public
router.post("/save", (req, res) => {
  User.create(req.body)
    .then((item) => res.json({ msg: "user added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this user" }));
});

// @route PUT api/items/:id
// @description Update item
// @access Public
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route DELETE api/items/:id
// @description Delete item by id
// @access Public
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then((item) => res.json({ msg: "user entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a user" }));
});

module.exports = router;
