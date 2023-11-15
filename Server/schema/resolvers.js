const { User, Recipe } = require('../models');
const bcrypt = require('bcrypt');
const { AuthenticationError, signToken } = require('../utils/auth');

const createNewUserWithFavorites = async (recipeTitle) => {
  const uniqueEmail = `nonauthenticateduser_${Date.now()}@example.com`;
  const newUser = new User({ email: uniqueEmail, password: 'dummyPassword' });
  const newRecipe = new Recipe({ title: recipeTitle, ingredients: [] });
  newUser.favorites.push(newRecipe);
  await newUser.save();
  return newUser;
};

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
        /*
        if (!context.user) {
          throw new AuthenticationError('You need to be logged in!');
        }
        */
        const user = await User.findById(context.user._id).populate({
          path: 'favorites',
          select: 'title ingredients'
        });

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
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        const token = signToken(newUser);
        return { token, user: newUser };
      } catch (error) {
        console.error('Error in register mutation:', error);
        throw new Error('Registration failed');
      }
    },

    login: async (_, { email, password }) => {
      try {
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
      } catch (error) {
        console.error('Error in login mutation:', error);
        throw new Error('Login failed');
      }
    },
    
    addToFavorites: async (_, { recipeTitle }, context) => {
      try {
        console.log('Executing addToFavorites mutation');

        if (!context.user) {
          console.warn('User not authenticated. Creating a new user without authentication.');

          const timestamp = Date.now();
          context.recipeTimestamp = timestamp;

          const newUser = await createNewUserWithFavorites(recipeTitle, timestamp);

          console.log('Created a new user with favorites:', newUser);
          return newUser;
        }

        const user = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { favorites: { title: recipeTitle } } },
          { new: true }
        ).populate({
          path: 'favorites',
          select: '_id title ingredients',
        });

        console.log('Updated user:', user);

        if (!user) {
          console.error('User not found');
          throw new Error('User not found');
        }

        return user;
      } catch (error) {
        console.error('Error in addToFavorites mutation:', error);
        throw error;
      }
    },

    removeFromFavorites: async (_, { recipeTitle }, context) => {
      try {
        console.log('Executing removeFromFavorites mutation');

        if (!context.user) {
          console.warn('User not authenticated. Removing the recipe without authentication.');

          const newUser = await User.findOne({ email: `nonauthenticateduser_${context.recipeTimestamp}@example.com` });

          if (newUser) {
            const updatedUser = await User.findByIdAndUpdate(
              newUser._id,
              { $pull: { favorites: { title: recipeTitle } } },
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
          { $pull: { favorites: { title: recipeTitle } } },
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
        throw new Error(`Error removing recipe "${recipeTitle}" from favorites`);
      }
    },
  },
};

module.exports = resolvers;
