const Comment = require('../../models/comment');

module.exports = {
  async createComment(req, res, next) {
    try {
      const newComment = await Comment.create(req.body);
      res.locals.comment = newComment;
      next();
    } catch (err) {
      next(err);
    }
  },

  async updateComment(req, res, next) {
    try {
      const updated = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.locals.comment = updated;
      next();
    } catch (err) {
      next(err);
    }
  },

  async deleteComment(req, res, next) {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      next();
    } catch (err) {
      next(err);
    }
  },

  async getComment(req, res, next) {
    try {
      const comment = await Comment.findById(req.params.id);
      res.locals.comment = comment;
      next();
    } catch (err) {
      next(err);
    }
  },

  async getAllComments(req, res, next) {
    try {
      const comments = await Comment.find();
      res.locals.comments = comments;
      next();
    } catch (err) {
      next(err);
    }
  }
};
