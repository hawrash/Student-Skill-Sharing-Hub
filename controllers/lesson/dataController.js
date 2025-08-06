const Lesson = require('../../models/Lesson');

// Fetch lessons for teacher dashboard
const getLessonsByTeacher = async (req, res, next) => {
  try {
    const lessons = await Lesson.find({ teacher: req.user._id });
    res.locals.lessons = lessons;
    res.locals.user = req.user; // Ensure user is available in the response   
    next();
  } catch (error) {
    next(error);
  }
};

// Fetch lessons available to learners
const getAvailableLessons = async (req, res, next) => {
  try {
    const lessons = await Lesson.find({ status: 'pending' }).populate('teacher', 'name');
    res.locals.lessons = lessons;
    res.locals.user = req.user; 
    next();
  } catch (error) {
    next(error);
  }
};

// Fetch lesson by ID for editing or showing
const getLessonById = async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id).populate('teacher', 'name').populate('student', 'name').populate('comments');
    if (!lesson) return res.status(404).send('Lesson not found');
    res.locals.lesson = lesson;
    res.locals.user = req.user; 
    next();
  } catch (error) {
    next(error);
  }
};

// Update lesson data (teacher only)
const updateLesson = async (req, res, next) => {
  try {
    const updatedLesson = await Lesson.findOneAndUpdate(
      { _id: req.params.id, teacher: req.user._id },
      req.body,
      { new: true }
    );
    if (!updatedLesson) return res.status(403).send('Not authorized to update');
    res.locals.lesson = updatedLesson;
    next();
  } catch (error) {
    next(error);
  }
};

// Create a new lesson
const create = async (req, res, next) => {
  try {
    const lesson = new Lesson({
      ...req.body,
      teacher: req.user._id
    });
    await lesson.save();
    res.locals.data.lesson = lesson;
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}      

module.exports = {
  getLessonsByTeacher,
  getAvailableLessons,
  getLessonById,
  updateLesson,
  create
};
