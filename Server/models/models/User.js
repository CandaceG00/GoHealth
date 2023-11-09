const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures that each username is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;


