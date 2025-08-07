module.exports = {
  showAllComments(req, res) {
    res.render('comment/Index', { comments: res.locals.comments });
  },

  showComment(req, res) {
    res.render('comment/Show', { comment: res.locals.comment });
  },

  showEditForm(req, res) {
    res.render('comment/Edit', { comment: res.locals.comment });
  },

  showNewForm(req, res) {
    res.locals.data.lessonId = req.params.lessonId; 
    res.render('comment/New', res.locals.data);
  },

  redirectToIndex(req, res) {
    res.redirect('/comment');
  }
};
