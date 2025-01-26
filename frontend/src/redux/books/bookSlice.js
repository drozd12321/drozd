import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const sliceBook = createSlice({
  name: "bookFilter",
  initialState,
  reducers: {
    setAddBook(state, action) {
      state.push(action.payload);
    },
    setDeleteBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
    setFavoriteBook(state, action) {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    },
  },
});
export default sliceBook.reducer;
export const { setAddBook, setDeleteBook, setFavoriteBook } = sliceBook.actions;
export const selectBook = (state) => state.books;
