const express = require('express');
const morgan = require('morgan');
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const path = require('path');

// Routes
const userRoutes = require('./controllers/auth/routeController');
const lessonRoutes = require('./controllers/lesson/routeController');
const commentRoutes = require('./controllers/comment/routeController'); 

const app = express();

//  View engine setup
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());
app.set('views', path.join(__dirname, 'views'));

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

//  Static files middleware 
app.use(express.static('public'));

//  Logger
app.use(morgan('dev'));

//  Routes
app.use('/users', userRoutes);
app.use('/lesson', lessonRoutes); 
app.use('/comment', commentRoutes);

module.exports = app;
