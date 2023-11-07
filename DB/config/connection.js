const mongoose = require('mongoose');

// Connect to Mongoose; Best practice, hide MongoDB URI in .env for security purposes;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api')
    .then(() => console.log('Mongoose connected'))
    .catch(err => console.log(err));

module.exports = mongoose.connection;