import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddBook } from "../../redux/books/bookSlice.js";
import booksDate from "../../date/books.json";
import createBook from "../../utils/createBook.js";
import "../../App.css";
import "./BookForm.css";
const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthors] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    if (title && author) {
      dispatch(setAddBook(createBook({ title: title, author: author })));
      setTitle("");
      setAuthors("");
    }
  }
  function handleAddRandomBook() {
    const randomIndex = Math.floor(Math.random() * booksDate.length);
    const randomBook = booksDate[randomIndex];
    dispatch(setAddBook(createBook(randomBook)));
  }
  return (
    <div className="app-block book-form">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthors(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  );
};

export default BookForm;
