# Student-Skill-Sharing-Hub


##  Introduction

**SkillShare Hub** is a peer-to-peer learning platform where students can teach and learn from one another. Users can offer lessons in topics like coding, art, music, and more. The app supports secure login, lesson creation, and booking, helping foster collaboration and knowledge-sharing in a simple, accessible way.

---

##  Why I Chose This Project

I’ve always appreciated community learning, especially between peers. This project allowed me to explore full-stack development while building something that encourages learning and collaboration. I also wanted to practice implementing authentication, data relationships, and MVC architecture.

---

## Minimum Requirements

### 1. **Backend**
- Built with **Node.js + Express**
- **MongoDB** for storing users, lessons, and bookings
- **JWT authentication** for secure login and protected routes
- MVC structure separating logic, routing, and data

### 2. **Frontend**
- **JSX view templates** (EJS/React-like)
- Custom **CSS styling** with mobile responsiveness
- Dynamic forms for lesson creation and booking

### 3. **Models**
- `User`: Can be a teacher or learner, with subjects they can teach/learn
- `Lesson`: Includes topic, description, date, teacher, learner

### 4. **Testing**
- **Jest** + **mongodb-memory-server**
- At least one unit test covering model validation

---

## 🧩 Pseudocode
START APP
- Connect to MongoDB
- Load environment variables
- Initialize Express server
- Setup routes and middleware
- Render homepage

USER REGISTRATION
- Show registration form
- On submit:
    - Validate input
    - Hash password
    - Create new User in DB
    - Generate JWT token
    - Store token in cookie
    - Redirect to dashboard

USER LOGIN
- Show login form
- On submit:
    - Find user by email
    - Compare password hash
    - If valid, generate JWT
    - Store token in cookie
    - Redirect to dashboard

DASHBOARD
- If JWT is valid:
    - Show user-specific data:
        • If teacher → show their posted lessons
        • If learner → show booked lessons

CREATE LESSON (Teacher)
- Show lesson creation form
- On submit:
    - Validate input
    - Associate lesson with teacher ID
    - Save lesson to DB
    - Redirect to dashboard

BOOK LESSON (Learner)
- View list of available lessons
- Click "Book"
    - Check availability
    - Associate learner ID
    - Change lesson status to "booked"
    - Save update in DB
    - Redirect to dashboard

EDIT / CANCEL LESSON
- Teacher or learner views lesson
- Can update lesson fields or delete it
- Save changes to DB

LOGOUT
- Clear JWT cookie
- Redirect to login page

ERROR HANDLING
- Show error messages for failed actions
    • Invalid login
    • Duplicate email
    • Lesson not found
    • Unauthorized access


