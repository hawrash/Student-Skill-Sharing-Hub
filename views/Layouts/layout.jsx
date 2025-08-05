const React = require('react');

function GalleryLayout(props) {
  return (
    <html>
      <head>
        <title>SkillHub</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header>
          <img src={`/public/images/logo.jpg`} alt="App Logo" className="logo" />
          <h1>Welcome to SkillHub</h1>
        </header>
        {props.children}
      </body>
    </html>
  );
}

module.exports = GalleryLayout;