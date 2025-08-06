const React = require('react');
function Edit({ lesson }) {
  return (
    <div>
      <h2>Edit</h2>
      <form method="POST" action={`/${lesson._id}?_method=PUT`}>
        <label>Topic:</label><br />
        <input
          type="text"
          name="topic"
          defaultValue={lesson.topic}
          required
          placeholder="Enter topic"
          title="Topic"
        /><br /><br />

        <label>Description:</label><br />
        <textarea
          name="description"
          rows="4"
          defaultValue={lesson.description}
          title="Description"
          placeholder="Enter description"
        ></textarea><br /><br />

        <label>Date:</label><br />
        <input
          type="date"
          name="date"
          defaultValue={lesson.date ? lesson.date.substring(0, 10) : ''}
          required
          title="Date"
        /><br /><br />

        <label>Status:</label><br />
        <select name="status" defaultValue={lesson.status} title="Status">
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select><br /><br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

module.exports = Edit;
