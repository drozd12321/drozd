import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    title: ''
}
const sliceFilter = createSlice({
    name:'filter',
    initialState,
    reducers: {
        setTitleFilter(state,action){
            return {
                ...state, title: action.payload
            }
        }
    }
})
export const {setTitleFilter} = sliceFilter.actions;
export default sliceFilter.reducer
