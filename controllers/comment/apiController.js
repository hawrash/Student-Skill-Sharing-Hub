const Comment = require('../../models/Commint');

module.exports = {
  async getAllComments(req, res) {
    const comments = await Comment.find();
    res.json(comments);
  },

  async getCommentById(req, res) {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
  }
};
