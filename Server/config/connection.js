//const mongoose = require('mongoose');

// Connect to Mongoose; Best practice, hide MongoDB URI in .env for security purposes;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api')
  //  .then(() => console.log('Mongoose connected'))
    //.catch(err => console.log(err));

//module.exports = mongoose.connection;

const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'yourDatabaseName';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
client.connect()
  .then(() => {
    console.log('Connected to MongoDB');

    // Your MongoDB code goes here

    // Close the connection when done
    client.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
