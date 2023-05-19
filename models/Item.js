const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
  
  name: {
    type: String,required: true},
  type: {
    type: String,required: true},
  dose: {
    type: String,required: true},
  sellerName: {
    type: String,required: true},
  price: {
    type: String,required: true},
  desc: {
    type: String,required: true},
  status: {
    type: String,required: true},
  image: {
    type: String}

});
module.exports = Item = mongoose.model('item', ItemSchema);



