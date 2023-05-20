const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  dose: {
    type: String,
    required: true
  },
  sellerName: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  }

});

module.exports = Item = mongoose.model('item', ItemSchema);



