const React = require('react');

function Show({ comment }) {
  return (
    <div>
      <h1>Comment Detail</h1>
      <p><strong>Content:</strong> {comment.content}</p>
      <p><strong>Reply:</strong> {comment.reply || 'No reply'}</p>
      <a href={`/comment/${comment._id}/edit`}>Edit</a>
      <form method="POST" action={`/comment/${comment._id}?_method=DELETE`} style={{ marginTop: "10px" }}>
        <button type="submit">Delete</button>
      </form>
      <a href="/comment">Back to all comments</a>
    </div>
  );
}

module.exports = Show;
