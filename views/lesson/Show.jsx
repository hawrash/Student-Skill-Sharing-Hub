const React = require('react');
function Show({ lesson, user }) {
  return (
    <div>
      <h2>{lesson.topic}</h2>
      <p><strong>Date:</strong> {lesson.date ? lesson.date.substring(0, 10) : 'N/A'}</p>
      <p><strong>Description:</strong> {lesson.description}</p>
      <p><strong>Status:</strong> {lesson.status}</p>
      <p><strong>Teacher:</strong> {lesson.teacher?.name}</p>
      {lesson.student && <p><strong>Student:</strong> {lesson.student.name}</p>}

      {user.role === 'teacher' && user._id === lesson.teacher._id && (
        <a href={`/${lesson._id}/edit`}>Edit</a>
      )}
    </div>
  );
}

module.exports = Show;
