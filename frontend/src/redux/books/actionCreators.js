import * as action from './actionTypes.js'
export const Add_Book = (newbook)=>{
    return {
        type:action.ADD_BOOK,
        payload:newbook}
}