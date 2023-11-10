//const mongoose = require('./db'); // Import your database connection
const { Schema, model } = require('mongoose');

// Define your schema
const userSchema = new Schema({
  username: String,
  password: String,
});

// Create a model based on the schema
const User = model('User', userSchema);

module.exports = User;
