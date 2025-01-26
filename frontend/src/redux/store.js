import { configureStore } from "@reduxjs/toolkit";
import sliceBook from "./books/bookSlice";
import sliceFilter from "./filter/filterSlice";
const store = configureStore({
  reducer: {
    books: sliceBook,
    filter: sliceFilter,
  },
});

export default store;
