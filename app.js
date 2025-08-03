const express = require('express');
const path = require('path');
const jsxEngine = require('jsx-view-engine')
const app = express();

// Set up view engine to render React JSX views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine())

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import your routes
const studentRoutes = require('./controllers/student/studentRoutes')

// Use your routes
app.use('/students', studentRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

module.exports = app;
