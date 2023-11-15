// seed.js
const db = require('../config/connection');
const mongoose = require('mongoose');
const { users, recipes } = require('./seedData');
const User = require('../models/models/User');
const Recipe = require('../models/models/Recipe');

// Connect to your MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/backendtesting3');

async function seedDatabase() {
    try {
      // Connect to your MongoDB database
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/backendtesting3');
  
      // Seed users
      const userDocs = await User.insertMany(users);
      console.log('Users seeded:', userDocs);
  
      // Seed recipes
      const recipeDocs = await Recipe.insertMany(recipes);
      console.log('Recipes seeded:', recipeDocs);
  
      // Close the database connection
      mongoose.connection.close();
    } catch (error) {
      console.error('Error seeding data:', error);
      mongoose.connection.close();
    }
  }
  
  // Call the seeding function
  seedDatabase();