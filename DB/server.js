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
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is now listening on PORT ${PORT}.`)
    });
});