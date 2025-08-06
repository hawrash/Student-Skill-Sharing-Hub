const React = require('react')
const Layout = require('../Layouts/layout')

function SignUp (props) {
    return(
        <Layout>
            <h1>📝 Sign Up</h1>
            
            <h2 className="text-center mb-3">Join The Greatest Of All Time!</h2>
            
            <form action="/users" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        placeholder="Enter your full name..."
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="Enter your email..."
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password" 
                        placeholder="Enter your password..."
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" required>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
                
                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">
                        📝 Create Account
                    </button>
                    <a href="/users/login" className="btn btn-secondary">
                        🔐 Sign In Instead
                    </a>
                </div>
            </form>
            
        </Layout>
    )
}

module.exports = SignUp