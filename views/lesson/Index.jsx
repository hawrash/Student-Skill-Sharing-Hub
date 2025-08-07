const React = require('react');
const Layout = require('../Layouts/layout');

function Index(props) {
  const { user, lessons, token } = props;

  return (
    <Layout user={user}>
      <div>
        <h2>All Lessons</h2>

        {/* Link to teacher dashboard */}
        {user.role === 'teacher' && (
          <>
            <a href={`/lesson/teacher?token=${token}`}>My Lessons</a><br />
            <a href={`/lesson/new?token=${token}`}>+ New</a>
          </>
        )}

        <ul>
          {lessons?.map((lesson) => (
            <li key={lesson._id}>
              <strong>{lesson.topic}</strong> –{' '}
              {lesson.date instanceof Date
                ? lesson.date.toISOString().substring(0, 10)
                : 'N/A'}
              <br />
              Status: {lesson.status}
              <br />
              {user.role === 'learner' && (
                <>
                  Teacher: {lesson.teacher?.name || 'N/A'}
                  <br />
                </>
              )}
              <a href={`/lesson/${lesson._id}?token=${token}`}>View</a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

module.exports = Index;
