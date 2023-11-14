const { User, Recipe } = require('../models');
const bcrypt = require('bcrypt');
const { AuthenticationError, signToken } = require("../utils/auth");


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
    user: async (_, { email }) => {
      try {
        const user = await User.findOne({ email });
        return user;
      } catch (err) {
        throw new Error(err);
      }
    },
    me: async(_, __, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      return context.user;
    },
    recipes: async () => {
      try {
        const recipes = await Recipe.find();
        return recipes;
      } catch (err) {
        throw new Error(err);
      }
    },
    favorites: async (_, __, context) => {
      try {
        if (!context.user) {
          throw new AuthenticationError('You need to be logged in!');
        }

        const user = await User.findById(context.user._id).populate('favorites')
        if (!user) {
          throw new AuthenticationError('User not found');
        }

        return user.favorites;
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    register: async (_, { email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      const token = signToken(newUser);
      return { token, user: newUser };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      
      if (!user) {
        throw new AuthenticationError('User not found');
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);

      return { token, user };
    },

    addToFavorites: async (_, { recipeId }, context) => {
      try {
        console.log('Executing addToFavorites mutation');
        
        if (!context.user) {
          console.warn('User not authenticated. Creating a new user without authentication.');
    
          // Check if there is a user with an empty favorites array
          const existingUser = await User.findOne({ favorites: [] });
    
          if (existingUser) {
            // If there is an existing user, add the recipe to their favorites
            const updatedUser = await User.findByIdAndUpdate(
              existingUser._id,
              { $addToSet: { favorites: recipeId } },
              { new: true }
            ).populate('favorites');
    
            console.log('Updated user with existing favorites:', updatedUser);
            return updatedUser;
          }
    
          // If no existing user, create a new user with an empty favorites array
          const newUser = new User({});
          newUser.favorites.push(recipeId);
          await newUser.save();
    
          console.log('Created a new user with favorites:', newUser);
          return newUser;
        }
    
        const user = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { favorites: recipeId } },
          { new: true }
        ).populate('favorites');
    
        console.log('Updated user:', user);
    
        if (!user) {
          console.error('User not found');
          throw new Error('User not found');
        }
    
        return user;
      } catch (error) {
        console.error('Error in addToFavorites mutation:', error);
        throw error; // rethrow the error
      }
    },

    removeFromFavorites: async (_, { recipeId }, context) => {
      try {
        console.log('Executing removeFromFavorites mutation');
    
        if (!context.user) {
          console.warn('User not authenticated. Removing the recipe without authentication.');
    
          // Check if there is a user with the given recipe in their favorites
          const existingUser = await User.findOne({ favorites: recipeId });
    
          if (existingUser) {
            // If there is an existing user, remove the recipe from their favorites
            const updatedUser = await User.findByIdAndUpdate(
              existingUser._id,
              { $pull: { favorites: recipeId } },
              { new: true }
            ).populate('favorites');
    
            console.log('Updated user with removed favorites:', updatedUser);
            return updatedUser;
          }
    
          console.error('Recipe not found in any user favorites');
          throw new Error('Recipe not found in any user favorites');
        }
    
        const user = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { favorites: recipeId } },
          { new: true }
        ).populate('favorites');
    
        console.log('Updated user:', user);
    
        if (!user) {
          console.error('User not found');
          throw new Error('User not found');
        }
    
        return user;
      } catch (error) {
        console.error('Error in removeFromFavorites mutation:', error);
        throw error; // rethrow the error
      }
    },
  },
};

module.exports = resolvers;
