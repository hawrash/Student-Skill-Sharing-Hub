const RESOURCE_PATH = '/lesson'
const showTeacherLessons = (req, res) => {
  res.render('lesson/Index', { 
    lessons: res.locals.lessons,
    user: req.user
  });
};

const showAvailableLessons = (req, res) => {
  res.render('lesson/Index', { 
    lessons: res.locals.lessons,
    user: req.user
  });
};

const redirectToLessons = (req, res) => {
    if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    }else {
      res.redirect(RESOURCE_PATH)
    } 
};

const showEditForm = (req, res) => {
  res.render('lesson/Edit', { 
    lesson: res.locals.lesson,
    user: req.user
  });
};

const showLesson = (req, res) => {
  res.render('lesson/Show', {
    lesson: res.locals.lesson,
    user: req.user
  });
};

const showNewForm = (req, res) => {
  res.render('lesson/New', {
    user: req.user
  });
};

module.exports = {
  showTeacherLessons,
  showAvailableLessons,
  showEditForm,
  showLesson,
  showNewForm,
  redirectToLessons
};
