// CommonJS import statements
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to MongoDB, before running the Express server
//db.once('open', () => {
  //  app.listen(PORT, () => {
    //    console.log(`Server is now listening on PORT ${PORT}.`)
    //});
//});
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/your-database-name';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
