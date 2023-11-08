const { User} = require("../models");

module.exports = {
  // GET USERS
  getUsers: async (req, res) => {
    try {
      const users = await User.find().select("-__v");
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // GET USER BY ID
  getSingleUser: async (req, res) => {
    try {
      // Retrieving single User data.
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v");

      if (!user) {
        return res.status(404).json({ message: "No User Found." });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // CREATE NEW USER
  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);

      // Send HTTP status 201: Created
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // UPDATE USER BY ID
  updateUser: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No User Found." });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}