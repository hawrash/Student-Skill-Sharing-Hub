const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');

const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const webRoutes = require('./routes/webRoutes');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(methodOverride('_method'));


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.use('/api/users', userRoutes);
app.use('/api/student', studentRoutes);
app.use('/', webRoutes);


app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong.' });
});

module.exports = app;
