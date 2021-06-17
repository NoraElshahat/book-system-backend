import {
  GET_BOOKS,
  ADD_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
} from "../constants/action-types";

const initialState = {
  books: [],
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return {
        ...state,
        books: payload,
      };
    case GET_BOOKS:
      return {
        ...state,
        books: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
