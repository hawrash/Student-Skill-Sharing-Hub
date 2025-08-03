const React = require('react');

function GalleryLayout({ logo, teacher, student }) {
  return (
    <html>
      <head>
        <title>Our Team</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header>
          <img src={`/public/images/logo.jpg`} alt="App Logo" className="logo" />
          <h1>Welcome to Our Platform</h1>
        </header>

        <section>
          <h2> Teachers</h2>
          <div className="gallery">
            {teachers.map((img, i) => (
              <div key={i} className="image-box">
                <img src={`/public/images/teacher.jpg`} alt={`teacher-${i}`} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2> Students</h2>
          <div className="gallery">
            {students.map((img, i) => (
              <div key={i} className="image-box">
                <img src={`/public/images/student.jpg`} alt={`student-${i}`} />
              </div>
            ))}
          </div>
        </section>
      </body>
    </html>
  );
}

module.exports = GalleryLayout;
