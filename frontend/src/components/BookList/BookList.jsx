import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import {
  selectFilterTitle,
  selectFilterAuthor,
  selectFavorites,
} from "../../redux/filter/filterSlice";
import { selectBook } from "../../redux/books/bookSlice";
import { setDeleteBook, setFavoriteBook } from "../../redux/books/bookSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../App.css";
import "./BookList.css";
const BookList = () => {
  const books = useSelector(selectBook);
  const filterTitle = useSelector(selectFilterTitle);
  const filterAuthor = useSelector(selectFilterAuthor);
  const favoritesBook = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(setDeleteBook(id));
  };
  const handleFavorite = (id) => {
    dispatch(setFavoriteBook(id));
  };
  const filteredBooks = books.filter((book) => {
    const mathTitle = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const matchAuthor = book.author
      .toLowerCase()
      .includes(filterAuthor.toLowerCase());
    const mathFavorite = favoritesBook ? book.isFavorite : true;
    return mathTitle && matchAuthor && mathFavorite;
  });
  const highLightMatch = (text, filter) => {
    if (!filter) return text;
    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((part, ind) => {
      if (part.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={ind} className="highLight">
            {" "}
            {part}
          </span>
        );
      }
      return part;
    });
  };
  return (
    <div className="app-block book-list">
      <h1>Book List</h1>
      {books.length === 0 ? (
        <p>No books avaible</p>
      ) : (
        <ul>
          {filteredBooks.map((book, ind) => (
            <li key={book.id}>
              {
                <div className="book-info">
                  {++ind}. {highLightMatch(book.title, filterTitle)}
                  by&nbsp;
                  <strong>{highLightMatch(book.author, filterAuthor)}</strong>
                  <div className="icon">
                    <span onClick={() => handleFavorite(book.id)}>
                      {book.isFavorite ? (
                        <BsBookmarkStarFill className="favorite" />
                      ) : (
                        <BsBookmarkStar />
                      )}
                    </span>
                    <DeleteIcon onClick={() => handleDelete(book.id)} />
                  </div>
                </div>
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
