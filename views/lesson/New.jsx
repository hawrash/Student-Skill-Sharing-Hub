const React = require('react');

function New(props) {
  return (
    <div>
      <h2>Create New Lesson</h2>
      <form method="POST" action="/lesson">
        {/* Hidden token input */}
        <input type="hidden" name="token" value={props.token || ''} />

        <label>Topic:</label><br />
        <input
          type="text"
          name="topic"
          required
          placeholder="Enter topic"
          title="Topic"
        /><br /><br />

        <label>Description:</label><br />
        <textarea
          name="description"
          rows="4"
          placeholder="Enter description"
          title="Description"
        ></textarea><br /><br />

        <label>Date:</label><br />
        <input
          type="date"
          name="date"
          required
          title="Date"
        /><br /><br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

module.exports = New;
