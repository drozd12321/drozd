import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Delete_Book, Favorite_Book } from '../../redux/books/actionCreators';
import { BsBookmarkStar } from 'react-icons/bs';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { selectFilterTitle } from '../../redux/filter/filterSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../App.css';
import './BookList.css';
const BookList = () => {
  const books = useSelector((state) => state.books);
  const filterTitle = useSelector(selectFilterTitle);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(Delete_Book(id));
  };
  const handleFavorite = (id) => {
    dispatch(Favorite_Book(id));
  };
  const filteredBooks = books.filter((book) => {
    const mathTitle = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    return mathTitle;
  });
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
                  {++ind}. {book.title} by&nbsp;<strong>{book.author}</strong>
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
