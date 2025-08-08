# 👤 User List App (React)

This is a simple React application that displays a list of users using reusable components.

---

## 🚀 Features

- Uses functional components (`User`, `App`)
- Imports user data from a separate file (`UserData`)
- Dynamically renders user info using `map()`
- Demonstrates use of `props` in React

---

## 📁 Project Structure

project/
├── src/
│ ├── assets/
│ │ └── main.js # Contains the UserData array
│ ├── components/
│ │ └── User.jsx # Reusable User component
│ ├── App.jsx # Main App component
│ ├── App.css # Optional styles
│ └── main.jsx # Entry point (Vite)
├── index.html
└── package.json

## 🛠 Tech Stack
React

Vite (or Create React App)

JavaScript (ES6)

## 📌 Notes
Each user is rendered using the User component via .map().

Keys are used properly to avoid rendering issues.

## Screenshot







