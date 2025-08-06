const React = require('react');
const Layout = require('../Layouts/layout');

function Index(props) {
  const { user, lessons } = props;
  const token = props.data.token
  return (
    <Layout user={user}>
      <div>
        <h2>All Lessons</h2>

        {/* Only teachers can create new lessons */}
        {user.role === 'teacher' && (
          <a href={`/lesson/new?token=${token}`}>+ New</a>
        )}

        <ul>
          {lessons.map((lesson) => (
            <li key={lesson._id}>
              <strong>{lesson.topic}</strong> –{' '}
              {lesson.date ? lesson.date.substring(0, 10) : 'N/A'}
              <br />
              Status: {lesson.status}
              <br />
              {user.role === 'learner' && (
                <>
                  Teacher: {lesson.teacher?.name}
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
