const mongoose = require('./db'); // Import your database connection

// Define your schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
