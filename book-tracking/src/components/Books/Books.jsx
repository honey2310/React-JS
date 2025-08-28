import React, { useState } from "react";
import "./books.css";

export default function Books() {
  const [BookList, setBookList] = useState([
    { id: 1, name: "The Secret", author: "Rhonda Byrne" },
  ]);

  const [name, setname] = useState("");
  const [author, setauthor] = useState("");
  const [index, setIndex] = useState(null);

  const Addbtn = () => {
    if (!name.trim() || !author.trim()) return;

    const newBook = {
      id: Date.now(),
      name: name.trim(),
      author: author.trim(),
    };
    setBookList([...BookList, newBook]);
    setname("");
    setauthor("");
  };

  const editbook = (i) => {
    setIndex(i);
    setname(BookList[i].name);
    setauthor(BookList[i].author);
  };

  const updateBook = () => {
    if (index === null) return;
    const temp = [...BookList];
    temp[index].name = name;
    temp[index].author = author;
    setBookList(temp);
    setname("");
    setauthor("");
    setIndex(null);
  };

  const deleteBook = (i) => {
    const temp = [...BookList];
    temp.splice(i, 1);
    setBookList(temp);
  };

  return (
    <div className="container">
      <h1 className="title">📚 My Book List</h1>

      <input
        type="text"
        placeholder="Enter book name"
        className="input"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter author name"
        className="input"
        value={author}
        onChange={(e) => setauthor(e.target.value)}
      />

      <div className="button-group">
        <button className="add-btn" onClick={Addbtn}>
          Add Book
        </button>
        <button className="update-book" onClick={updateBook}>
          Update Book
        </button>
      </div>

      <div className="book-list">
        {BookList.map((book, i) => (
          <div className="book-item" key={book.id}>
            <span className="book-info">
              {book.name} — <i>{book.author}</i>
            </span>
            <div className="actions">
              <button className="edit-btn" onClick={() => editbook(i)}>
                Edit
              </button>
              <button className="remove-btn" onClick={() => deleteBook(i)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
