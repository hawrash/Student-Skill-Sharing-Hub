const React = require('react');

function Edit({ comment }) {
  return (
    <div>
      <h1>Edit Comment</h1>
      <form method="POST" action={`/comment/${comment._id}?_method=PUT`}>
        <label>Content:</label>
        <input
          type="text"
          name="content"
          defaultValue={comment.content}
          required
          placeholder="Enter comment content"
          title="Comment Content"
        />
        <br />
        <label>Reply:</label>
        <input
          type="text"
          name="reply"
          defaultValue={comment.reply || ''}
          placeholder="Enter reply"
          title="Reply"
        />
        <br />
        <button type="submit">Update Comment</button>
      </form>
    </div>
  );
}

module.exports = Edit;
