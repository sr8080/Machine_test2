const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  items: [MenuItemSchema],
});

const Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;
