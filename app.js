const express = require('express');
const path = require('path');
const jsxEngine = require('jsx-view-engine')
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const studentRoutes = require('./controllers/student/studentRoutes')
const authRoutes = require('./controllers/auth/authRoutes')
//const teacherRoutes = require('./controllers/teacher/teacherRoutes') 
const userRoutes = require('./controllers/user/userRoutes') 

app.use('/auth', authRoutes);
app.use('/student', studentRoutes);
//app.use('/teacher', teacherRoutes);
app.use('/user', userRoutes);

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.get('/', (req, res) => {
  res.render('Layouts/layout', res.locals.data)
})


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

module.exports = app;
