import React from "react";

const SignUp = () => (
  <div className="auth-container">
    <h1>📝 Sign Up</h1>
    <form action="/users/signup" method="POST">
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <select name="role" required>
        <option value="">Select Role</option>
        <option value="teacher">Teacher</option>
        <option value="learner">Learner</option>
      </select>
      <button type="submit">Create Account</button>
    </form>
    <p>
      Already have an account? <a href="/login">Sign In</a>
    </p>
  </div>
);

export default SignUp;
