import store from "./store/index";
import { addBook, getBooks } from "./actions/index";

window.store = store;
window.getBooks = getBooks;
