import { configureStore } from "@reduxjs/toolkit";
import sliceBook from "./books/bookSlice";
import sliceFilter from "./filter/filterSlice";
import errorSlice from "./filter/errorSlice";
const store = configureStore({
  reducer: {
    books: sliceBook,
    filter: sliceFilter,
    error: errorSlice
  },
});

export default store;
