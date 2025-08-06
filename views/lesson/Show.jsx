const React = require('react');
const Layout = require('../Layouts/layout');

function Show({ lesson, user, token }) {
  // Format the date safely
  const formattedDate =
    lesson.date instanceof Date
      ? lesson.date.toISOString().substring(0, 10)
      : 'N/A';

  // Link back to lessons page (include token if required)
  const backLink = `/lesson?token=${token}`;

  // Link to edit page (only for teacher who owns it)
  const editLink = `/${lesson._id}/edit?token=${token}`;

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
        <a href={`/comment/new/${lesson._id}?token=${token}`}>Add Comment</a>
          {/* Render comments if any */}
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

          {/* Edit link for the teacher who owns this lesson */}
          {user.role === 'teacher' && user._id === lesson.teacher._id && (
            <a href={editLink} className="button">Edit Lesson</a>
          )}

          {/* Back to Lessons */}
          <a href={backLink} style={{ display: 'block', marginTop: '1rem' }}>
            &larr; Back to Lessons
          </a>
        </div>
      </main>
    </Layout>
  );
}

module.exports = Show;
