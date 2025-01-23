import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Delete_Book, Favorite_Book } from '../../redux/books/actionCreators';
import { BsBookmarkStar,BsBookmarkStarFill } from 'react-icons/bs';
import { selectFilterTitle,selectFilterAuthor,selectFavorites } from '../../redux/filter/filterSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../App.css';
import './BookList.css';
const BookList = () => {
  const books = useSelector((state) => state.books);
  const filterTitle = useSelector(selectFilterTitle);
  const filterAuthor = useSelector(selectFilterAuthor);
  const favoritesBook = useSelector(selectFavorites);
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
    const matchAuthor = book.author
    .toLowerCase()
    .includes(filterAuthor.toLowerCase());
    const mathFavorite = favoritesBook ? book.isFavorite : true;
    return mathTitle && matchAuthor && mathFavorite;
  });
  const highLightMatch = (text,filter) => {
    if(!filter) return text;
    const regex = new RegExp(`(${filter})`, 'gi');
    return text.split(regex).map((part,ind)=>{
      if(part.toLowerCase()===filter.toLowerCase()){
        return (<span key={ind} className='highLight'> {part}</span>)
      }
      return part;
    });
  }
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
                  {++ind}. {highLightMatch(book.title,filterTitle)} by&nbsp;<strong>{highLightMatch(book.author,filterAuthor)}</strong>
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
