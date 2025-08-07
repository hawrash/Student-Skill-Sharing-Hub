const Lesson = require('../../models/Lesson');

// Fetch lessons for teacher dashboard
const getLessonsByTeacher = async (req, res, next) => {
  try {
    const lessons = await Lesson.find({ teacher: req.user._id });
    res.locals.lessons = lessons;
    res.locals.user = req.user;
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

// Fetch a single lesson by ID
const getLessonById = async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
      .populate('teacher', 'name')
      .populate('student', 'name')
      .populate('comments');
    if (!lesson) return res.status(404).send('Lesson not found');
    res.locals.lesson = lesson;
    res.locals.user = req.user;
    next();
  } catch (error) {
    next(error);
  }
};

// Create a new lesson (teacher only)
const create = async (req, res, next) => {
  try {
    const lesson = new Lesson({
      ...req.body,
      teacher: req.user._id,
    });
    await lesson.save();
    res.locals.data = { lesson };
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update lesson details (teacher only)
const updateLesson = async (req, res, next) => {
  console.log('Updating lesson with data:', req.body);
  console.log('Lesson ID:', req.params.id);
  console.log('User ID:', req.user._id);
  try {
    const updatedLesson = await Lesson.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    console.log('Updated lesson:', updatedLesson);
    if (!updatedLesson) return res.status(403).send('Not authorized to update');
    res.locals.lesson = updatedLesson;
    next();
  } catch (error) {
    next(error);
  }
};

// Delete a lesson (teacher only)
const deleteLesson = async (req, res, next) => {
  try {
    const deleted = await Lesson.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deleted) return res.status(403).send('Not authorized to delete');
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLessonsByTeacher,
  getAvailableLessons,
  getLessonById,
  create,
  updateLesson,
  deleteLesson,
};
