import {
  GET_BOOKS,
  ADD_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
} from "../constants/action-types";

export function getBooks(payload) {
  return {
    type: GET_BOOKS,
    payload,
  };
}
export function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload,
  };
}

export function updateBook(payload) {
  return {
    type: UPDATE_BOOK,
    payload,
  };
}

export function deleteBook(payload) {
  return {
    type: DELETE_BOOK,
    payload,
  };
}
