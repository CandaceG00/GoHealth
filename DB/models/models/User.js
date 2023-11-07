const mongoose = require("mongoose");

// Schema to create User model
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Please enter a valid email address",
    },
  },
  {
    // default behavior applies "getters: true"
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Initialize User model
const User = mongoose.model("user", userSchema);

module.exports = User;
