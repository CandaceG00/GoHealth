const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  // Add other properties as needed
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
