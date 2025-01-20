import * as action from './actionTypes.js';
export const Add_Book = (newbook) => {
  return {
    type: action.ADD_BOOK,
    payload: newbook,
  };
};
export const Delete_Book = (id) => {
  return {
    type: action.DELETE_BOOK,
    payload: id,
  };
};
