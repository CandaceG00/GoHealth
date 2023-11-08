const User = require('./models'); // Import the User model

// Create a new user
const newUser = new User({
  username: 'string',
  password: 'string',
});

// Save the user to the database
newUser.save((err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log('User saved to the database:', user);
  }
});
