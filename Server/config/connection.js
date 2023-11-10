const mongoose = require('mongoose');

// Connection URL to your MongoDB instance
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testing');


module.exports = mongoose.connection;
