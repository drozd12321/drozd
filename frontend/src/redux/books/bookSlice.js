import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createBook from "../../utils/createBook";
import { setError } from "../filter/errorSlice";
const initialState = [];
export const fethData = createAsyncThunk(
  "books/fetchData",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);
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
  extraReducers: (builder) => {
    builder.addCase(fethData.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBook(action.payload));
      }
    });
  },
});
export default sliceBook.reducer;
export const { setAddBook, setDeleteBook, setFavoriteBook } = sliceBook.actions;
export const selectBook = (state) => state.books;
