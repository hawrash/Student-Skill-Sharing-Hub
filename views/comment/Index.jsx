const React = require('react');

function Index({ comments }) {
  return (
    <div>
      <h1>All Comments</h1>
      <a href="/comment/new">Create New Comment</a>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <a href={`/comment/${comment._id}`}>{comment.content}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = Index;
