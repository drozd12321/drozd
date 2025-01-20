import React from 'react';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { Delete_Book } from '../../redux/books/actionCreators';
import '../../App.css';
import './BookList.css';
const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(Delete_Book(id));
  };
  return (
    <div className="app-block book-list">
      <h1>Book List</h1>
      {books.length === 0 ? (
        <p>No books avaible</p>
      ) : (
        <ul>
          {books.map((book, ind) => (
            <li key={book.id}>
              {
                <div className="book-info">
                  {++ind}. {book.title} by&nbsp;<strong>{book.author}</strong>
                  <div className="icon" onClick={() => handleDelete(book.id)}>
                    <DeleteIcon />
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
