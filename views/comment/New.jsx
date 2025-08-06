const React = require('react');

function New() {
  return (
    <div>
      <h1>New Comment</h1>
      <form method="POST" action="/comment">
        <label>Content:</label>
        <input type="text" name="content" required title="Enter your comment content" placeholder="Enter your comment" />
        <br />
        <label>Reply (optional):</label>
        <input type="text" name="reply" title="Enter your reply (optional)" placeholder="Enter your reply (optional)" />
        <br />
        <button type="submit">Create Comment</button>
      </form>
    </div>
  );
}

module.exports = New;
