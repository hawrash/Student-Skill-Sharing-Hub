const React = require('react');
const Layout = require('../Layouts/layout');

function Show({ lesson, user, token }) {
  const tokenQuery = token ? `?token=${token}` : '';

  const formattedDate = lesson.date
    ? new Date(lesson.date).toISOString().substring(0, 10)
    : 'N/A';

  const backLink = `/lesson${tokenQuery}`;
  const editLink = `/lesson/${lesson._id}/edit${tokenQuery}`;
  const deleteAction = `/lesson/${lesson._id}${tokenQuery}&_method=DELETE`;

  return (
    <Layout user={user}>
      <main className="container">
        <div className="card">
          <h2>{lesson.topic}</h2>

          <p><strong>Date:</strong> {formattedDate}</p>
          <p><strong>Description:</strong> {lesson.description || 'No description provided.'}</p>
          <p><strong>Status:</strong> {lesson.status}</p>
          <p><strong>Teacher:</strong> {lesson.teacher?.name || 'N/A'}</p>

          {lesson.student && (
            <p><strong>Student:</strong> {lesson.student.name}</p>
          )}

          <a href={`/comment/new/${lesson._id}${tokenQuery}`}>Add Comment</a>

          {lesson.comments && lesson.comments.length > 0 ? (
            <div>
              <h3>Comments:</h3>
              {lesson.comments.map((comment, idx) => (
                <p key={idx}>{comment.content}</p>
              ))}
            </div>
          ) : (
            <p>No comments yet.</p>
          )}

            <a href={`/lesson/${lesson._id}/edit?token=${token}`} className="btn btn-primary">
                        ✏️ Edit {lesson.name}
                    </a>
                </div>
                
                <div className="lesson">
                    <form action={`/lesson/${lesson._id}?_method=DELETE&token=${token}`} method="POST">
                        <button type="submit" className="btn btn-danger">
                            🗑️ Delete {lesson.name}
                        </button>
                    </form>
                </div>
        <a href={backLink} className="back-to-lesson-link">
          &larr; Back to Lessons
        </a>
      </main>
    </Layout>
  );
}

module.exports = Show;
