const React = require('react');

function New(props) {
    const { lessonId, token } = props.data
  return (
    <div>
      <h1>New Comment</h1>
      <form method="POST" action={`/comment/new/${lessonId}?token=${token}`}>
        <label>Content:</label>
        <input type="text" name="content" required title="Enter your comment content" placeholder="Enter your comment" />
        <br />
        <button type="submit">Create Comment</button>
      </form>
    </div>
  );
}

module.exports = New;