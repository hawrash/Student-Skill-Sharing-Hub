const React = require('react');
const Layout = require('../Layouts/layout');

function New(props) {
  return (
    <Layout>
      <main className="container">
        <h2>Create New Lesson</h2>
        <form method="POST" action={`/lesson?token=${props.token || ''}`}>
          <input type="hidden" name="token" value={props.token || ''} />

          <label>Topic:</label>
          <input
            type="text"
            name="topic"
            required
            placeholder="Enter topic"
            title="Topic"
          />

          <label>Description:</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Enter description"
            title="Description"
          ></textarea>

          <label>Date:</label>
          <input
            type="date"
            name="date"
            required
            title="Date"
          />

          <button type="submit">Create</button>
        </form>
      </main>
    </Layout>
  );
}

module.exports = New;
