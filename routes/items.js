// routes/api/items.js

const express = require('express');
const router = express.Router();

// Load Item model
const Book = require('../models/Item');

// @route GET api/items/test
// @description tests items route
// @access Public
router.get('/test', (req, res) => res.send('item route testing!'));

// @route GET api/items
// @description Get all items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noitemsfound: 'No Items found' }));
});

// @route GET api/items/:id
// @description Get single item by id
// @access Public
router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ noitemfound: 'No Item found' }));
});

// @route POST api/items
// @description add/save item
// @access Public
router.post('/', (req, res) => {
  Item.create(req.body)
    .then(item => res.json({ msg: 'Item added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this item' }));
});

// @route PUT api/items/:id
// @description Update item
// @access Public
router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then(item => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route DELETE api/items/:id
// @description Delete item by id
// @access Public
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, req.body)
    .then(item => res.json({ msg: 'Item entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a item' }));
});

module.exports = router;