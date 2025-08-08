import React, { useState } from "react";
import "./books.css";

export default function Books() {
  const [BookList, setBookList] = useState([
    { id: 1, name: "The Secret", author: "Rhonda Byrne" },
  ]);

  const [name, setname] = useState("");
  const [author, setauthor] = useState("");
  const [index, setIndex] = useState(0);

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

  function editbook(index) {
    setIndex(index)
    setname(BookList[index].name);
    setauthor(BookList[index].author);
  };
  return (
    <div>
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
      <button className="add-btn" onClick={Addbtn}>
        Add book
      </button>


    <button className="update-book"
        onClick={() => {
          const temp = [...BookList];
          temp[index].name=name;
          temp[index].author = author;
          setBookList(temp);
          setname("");
          setauthor("")
        }}
      >
        Update Book
      </button>

      {BookList.map((book, index) => (
        <p className="preview" key={book.id}>
          {book.name} - {book.author}
          <button
            className="remove-btn"
            onClick={() => {
              const temp = [...BookList];
              temp.splice(index, 1);
              setBookList(temp);
            }}
          >
            Delete
          </button>
          <button className="edit-btn" onClick={()=>editbook(index)}>Edit</button>
        </p>
      ))}
    </div>
  );
}
