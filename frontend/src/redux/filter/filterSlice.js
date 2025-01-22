import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    title: ''
}
const sliceFilter = createSlice({
    name:'filter',
    initialState,
    reducers: {
        setTitleFilter(state,action){
            state.title = action.payload
        }
    }
})
export const {setTitleFilter} = sliceFilter.actions;
export const selectFilterTitle = (state)=>state.filter.title;
export default sliceFilter.reducer
