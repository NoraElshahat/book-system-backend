import {
  GET_BOOKS,
  ADD_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
} from "../constants/action-types";
import axios from "axios";

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
      axios.get("http://localhost:5000/books/books").then((res) => {
        console.log(res.data.data, " from reducer");
        return {
          ...state,
          books: state.books.push(res.data.data),
        };
      });

    default:
      return {
        ...state,
      };
  }
}
