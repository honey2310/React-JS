# 📚 Book Tracking App (React)

A simple React application to track books you've read or plan to read. You can **add**, **edit**, **update**, and **delete** books using a clean and intuitive interface.

---

## 🚀 Features

- ✅ Add new books with name and author
- ✏️ Edit existing book entries
- 🔁 Update edited books
- ❌ Delete books from the list
- 🔄 Realtime state updates using React hooks

---

## 🖼️ Screenshot

> _(Optional: Add a screenshot or GIF here to show how it works)_

---

## 🧱 Project Structure

book-tracker/
├── src/
│ ├── components/
│ │ └── Books.jsx # Main component with all book logic
│ ├── App.jsx # Main app file rendering Books component
│ ├── App.css # Global styles
│ └── main.jsx # Entry point (if using Vite)
├── public/
│ └── index.html
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Technologies Used

- React
- JavaScript (ES6+)
- CSS (custom)

---
 ## 🧠 How It Works
State Management:
The app uses useState to manage the book list, input fields, and edit mode.

Add Book:
Fill in the name and author, click "Add Book".

Edit Book:
Click "Edit" next to any book, update details, then click "Update Book".

Delete Book:
Click "Delete" to remove any book from the list.