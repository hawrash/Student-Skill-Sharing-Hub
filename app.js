const express = require('express');
const morgan = require('morgan');
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const path = require('path');

// Routes
const userRoutes = require('./controllers/auth/routeController');
const lessonRoutes = require('./controllers/lesson/routeController'); 

const app = express();

// View engine
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});
app.use(express.static('public'));
app.use(morgan('dev'));

// Routes
app.use('/users', userRoutes);
app.use('/lesson', lessonRoutes); 

module.exports = app;
