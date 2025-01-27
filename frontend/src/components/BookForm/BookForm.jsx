import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddBook, fethData } from "../../redux/books/bookSlice.js";
import { setError } from "../../redux/filter/errorSlice.js";
import { FaSpinner } from "react-icons/fa";
import booksDate from "../../date/books.json";
import createBook from "../../utils/createBook.js";
import "../../App.css";
import "./BookForm.css";
const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthors] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    if (title && author) {
      dispatch(setAddBook(createBook({ title: title, author: author })));
      setTitle("");
      setAuthors("");
    } else {
      dispatch(setError("Заполните все необходимые поля"));
    }
  }
  function handleAddRandomBook() {
    const randomIndex = Math.floor(Math.random() * booksDate.length);
    const randomBook = booksDate[randomIndex];
    dispatch(setAddBook(createBook(randomBook)));
  }
  const handlAddRandomBookAPI = async () => {
    try {
      setLoading(true);
      await dispatch(fethData("http://localhost:4000/randomBookDel"));
    } finally {
      setLoading(false);
    }
  };
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
        <button
          type="button"
          onClick={handlAddRandomBookAPI}
          disabled={loading}
        >
          {loading ? (
            <>
              <span>Loading Book ...</span>
              <FaSpinner className="spiner rotate" />
            </>
          ) : (
            "Add Book API"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
