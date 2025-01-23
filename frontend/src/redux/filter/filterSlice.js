import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  isFavorite:false
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
    setFavorites(state){
      state.isFavorite = !state.isFavorite;
    },
    setResetFilters() {
      return initialState; // reset state to initial state
    },
  },
});
export const { setTitleFilter, setResetFilters, setAuthorFilter,setFavorites } =
  sliceFilter.actions;
export const selectFilterTitle = (state) => state.filter.title;
export const selectFilterAuthor = (state) => state.filter.author;
export const selectFavorites = (stae) => stae.filter.isFavorite;
export default sliceFilter.reducer;
