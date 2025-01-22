import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
};
const sliceFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter(state, action) {
      state.title = action.payload;
    },
    setAuthorFilter(state, action) {
      state.author = action.payload;
    },
    setResetFilters(state) {
      return initialState; // reset state to initial state
    },
  },
});
export const { setTitleFilter, setResetFilters, setAuthorFilter } =
  sliceFilter.actions;
export const selectFilterTitle = (state) => state.filter.title;
export const selectFilterAuthor = (state) => state.filter.author;
export default sliceFilter.reducer;
