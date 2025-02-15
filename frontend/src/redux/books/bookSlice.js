import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createBook from "../../utils/createBook";
import { setError } from "../filter/errorSlice";
const initialState = {
  books:[],
  isLoadingAPI: false
};
export const fethData = createAsyncThunk(
  "books/fetchData",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const sliceBook = createSlice({
  name: "bookFilter",
  initialState,
  reducers: {
    setAddBook(state, action) {
      state.books.push(action.payload);
    },
    setDeleteBook(state, action) {
      return {...state, books: state.books.filter((book) => book.id !== action.payload)}
    },
    setFavoriteBook(state, action) {
        state.books = state.books.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(fethData.pending, (state) => {
      state.isLoadingAPI = true;
    })
    .addCase(fethData.fulfilled, (state,action) => {
      state.isLoadingAPI = false;
      if(action.payload.title  &&  action.payload.author){
        state.books.push(createBook(action.payload));
      }
    }) 
    .addCase(fethData.rejected, (state) => {
      state.isLoadingAPI = false;
    })
  },

});
export default sliceBook.reducer;
export const { setAddBook, setDeleteBook, setFavoriteBook } = sliceBook.actions;
export const selectBook = (state) => state.books.books;
export const selectLoadingAPI = (state) => state.books.isLoadingAPI;
 