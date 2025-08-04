import React from "react";

const SignIn = () => (
  <div className="auth-container">
    <h1>🔐 Sign In</h1>
    <form action="/users/login" method="POST">
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
  </div>
);

export default SignIn;
