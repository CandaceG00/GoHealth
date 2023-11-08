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

const User = require('./models/user');

const newUser = new User({
  username: 'example_user',
  password: 'hashed_password', // You should hash passwords for security
});

newUser.save((err, user) => {
  if (err) {
    console.error('Error saving user:', err);
  } else {
    console.log('User saved:', user);
  }
});

