const React = require('react');

function GalleryLayout({ user, token, children }) {
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

          <nav className="nav-auto-margin">
            {user ? (
              <>
                <span>Welcome, {user.name}</span> |{' '}
                {user.role === 'teacher' && (
                  <a href={`/lesson/teacher?token=${token}`}>My Lessons</a>
                )}{' '}
                | <a href={`/lesson?token=${token}`}>All Lessons</a> |{' '}
                <a href={`/users/logout?token=${token}`}>Logout</a>
              </>
            ) : (
              <>
                <a href="/users/login">Login</a> | <a href="/users">Sign Up</a>
              </>
            )}
          </nav>
        </header>

        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}

module.exports = GalleryLayout;
