// Path to redirect users to after certain actions
const RESOURCE_PATH = '/lesson'; // Change this if your base path is different

// Utility to extract token from the request
const getTokenFromReq = (req) => req.query.token || null;

// Render all lessons for teachers
const showTeacherLessons = (req, res) => {
  res.render('lesson/Index', {
    lessons: res.locals.lessons,
    user: req.user,
    token: getTokenFromReq(req),
  });
};

// Render all available lessons for learners
const showAvailableLessons = (req, res) => {
  res.render('lesson/Index', {
    lessons: res.locals.lessons,
    user: req.user,
    token: getTokenFromReq(req),
  });
};

// Render lesson edit form
const showEditForm = (req, res) => {
  res.render('lesson/Edit', {
    lesson: res.locals.lesson,
    user: req.user,
    token: getTokenFromReq(req),
  });
};

// Render individual lesson page
const showLesson = (req, res) => {
  res.render('lesson/Show', {
    lesson: res.locals.lesson,
    user: req.user,
    token: getTokenFromReq(req),
  });
};

// Render new lesson form
const showNewForm = (req, res) => {
  res.render('lesson/New', {
    user: req.user,
    token: getTokenFromReq(req),
  });
};

// Render comment form
const map = (req, res) => {
  res.render('comment/New', {
    user: req.user,
    token: getTokenFromReq(req),
  });
};

// Redirect to lessons page with optional token
const redirectToLessons = (req, res) => {
  if (res.locals.data && res.locals.data.token) {
    res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`);
  } else {
    res.redirect(RESOURCE_PATH);
  }
};

// Export all controller functions
module.exports = {
  showTeacherLessons,
  showAvailableLessons,
  showEditForm,
  showLesson,
  showNewForm,
  map,
  redirectToLessons
};
