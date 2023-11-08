const mongoose = require('mongoose');

// Connection URL to your MongoDB instance
const dbURL = 'mongodb://localhost:27017/';

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
