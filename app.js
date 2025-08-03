const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');

const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const webRoutes = require('./routes/webRoutes');

const app = express();

app.set('view engine', 'ejs');  // Using EJS templates

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(methodOverride('_method'));  // For supporting PUT/DELETE in forms

// Mount routes
app.use('/users', userRoutes);
app.use('/students', studentRoutes);
app.use('/', webRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

module.exports = app;
