import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};
const sliceFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter(state, action) {
      state.title = action.payload;
    },
    setResetFilters(state) {
      return initialState; // reset state to initial state
    },
  },
});
export const { setTitleFilter, setResetFilters } = sliceFilter.actions;
export const selectFilterTitle = (state) => state.filter.title;
export default sliceFilter.reducer;
