import { createSlice } from "@reduxjs/toolkit";
import { fethData } from "../books/bookSlice";
const initialState = '';
const errorSlice = createSlice({
    name:'error',
    initialState,
    reducers:{
        setError(state, action){
            return action.payload;
        },
        setClearError(){
            return initialState;
        }
    },
})

export const {setError,setClearError} = errorSlice.actions;
export const selectError = (state) => state.error;
export default errorSlice.reducer;