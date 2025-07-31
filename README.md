# 🎓 Student Skill Sharing Hub

## 📘 Introduction

**SkillShare Hub** is a peer-to-peer learning platform where students can teach and learn from each other. Users can offer lessons in topics like coding, art, music, and more. The app supports secure login, lesson creation, and booking, helping foster collaboration and knowledge-sharing in a simple, accessible way.

---

##  Why This Project?

I’ve always appreciated community learning, especially between peers. This project allowed me to explore full-stack development while building something that encourages collaboration. I also aimed to practice authentication, data relationships, and MVC architecture using modern technologies.

---

## ✅ Core Features

- Secure registration & login (JWT authentication)  
- Role-based user types (teacher/learner)  
- Teachers can create and manage lessons  
- Learners can browse and book lessons  
- Protected dashboard with conditional views  
- Error handling for common edge cases  
- Responsive, user-friendly interface  

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Authentication**: JWT + bcrypt  
- **Views**: JSX-style EJS templates  
- **Styling**: Custom CSS (responsive)  
- **Testing**: Jest, MongoDB Memory Server  
- **Architecture**: MVC (Model-View-Controller)  

---

## 🗂️ Models

| Model  | Fields                                                                 | Relationships                               |
|--------|------------------------------------------------------------------------|---------------------------------------------|
| User   | name, email, password, role (`teacher` or `learner`), subjects         | Has many Lessons (if teacher)               |
| Lesson | topic, description, date, status, teacher (User ID), learner (User ID) | Belongs to Teacher and optionally a Learner |

---

## 🧱 Architecture Diagram

```plaintext
┌────────────┐      ┌────────────┐
│   User     │◄────▶│   Lesson   │
│            │      │            │
│ • name     │      │ • topic    │
│ • email    │      │ • desc     │
│ • role     │      │ • date     │
│ • subjects │      │ • teacher  │
└────────────┘      │ • learner  │
                    └────────────┘

🧪 Testing
✅ Jest used for unit testing

✅ mongodb-memory-server for isolated DB tests

✅ At least one test suite covering model validation

📝 Pseudocode Overview
App Initialization
Connect to MongoDB

Load .env variables

Initialize Express + Middleware

Set up routes

Render homepage

User Registration
Show form

Validate input

Hash password

Create User

Generate JWT, store in cookie

Redirect to dashboard

User Login
Find user by email

Compare password hash

Generate JWT if valid

Store in cookie

Redirect to dashboard

Dashboard Logic
If teacher: Show posted lessons

If learner: Show booked lessons

Lesson Creation (Teacher)
Show creation form

Validate input

Associate lesson with teacher ID

Save to DB

Lesson Booking (Learner)
View available lessons

Book a lesson

Associate learner ID

Update status to “booked”

Edit / Cancel Lesson
Update or delete lesson if authorized

Logout
Clear cookie

Redirect to login

🧩 Future Improvements
Add messaging between users

Email notifications for booking

Lesson categories and filters

Admin panel for user/lesson management

Lesson reviews/ratings

📂 File Structure
pgsql
Copy
Edit
Student-Skill-Sharing-Hub/
├── README.md
├── .env
├── package.json
├── server.js
├── app.js
├── models/
│   ├── User.js
│   └── Lesson.js
├── controllers/
├── views/
├── routes/
├── public/
│   └── css/
├── tests/
│   └── user.test.js
└── .gitignore
