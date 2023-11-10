const { User } = require('../models/models/');
//const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error(err);
      }
    },
    user: async (_, { username }) => {
      try {
        const user = await User.findOne({ username });
        return user;
      } catch (err) {
        throw new Error(err);
      }
    },
    me: async(_, __, context) => {
      if (!context.user) {
        throw new Error('You need to be logged in!');
      }
      return context.user;
    },
  },
};

module.exports = resolvers;