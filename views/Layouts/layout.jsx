const React = require('react');

function GalleryLayout(props) {
  return (
    <html>
      <head>
        <title>SkillHub</title>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <header>
          <div className="site-title">SkillHub</div>
          <img src="/images/logo.jpg" alt="App Logo" className="logo" />
        </header>

        <main className="container">
          {props.children}
        </main>
      </body>
    </html>
  );
}

module.exports = GalleryLayout;
