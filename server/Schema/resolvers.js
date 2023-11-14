const { User } = require("../models/User");
const {
  signToken,
  verifyToken,
  AuthenticationError,
} = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find()
        .select("-__v -password")
        .populate("bookmarkedNews");
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username })
        .select("-__v -password")
        .populate("bookmarkedNews");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("bookmarkedNews");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError("Invalid email or password");
      }

      const correctPassword = await user.checkPassword(password);

      if (!correctPassword) {
        throw AuthenticationError("Invalid email or password");
      }

      const token = signToken(user);

      return { token, user };
    },
    saveNews: async (parent, { newsSaved }, context) => {
      if (context.user) {
        const updateUserNews = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { bookmarkedNews: newsSaved } },
          { new: true, runValidators: true }
        ).populate("bookmarkedNews");

        return updateUserNews;
      }
      throw AuthenticationError;
    },
    removeNews: async (parent, { newsId }, context) => {
      if (context.user) {
        const removeNews = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { bookmarkedNews: { newsId } } },
          { new: true }
        ).populate("bookmarkedNews");

        return removeNews;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
