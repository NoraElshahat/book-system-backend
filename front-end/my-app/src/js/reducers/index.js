import {
  GET_BOOKS,
  ADD_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
} from "../constants/action-types";
import axios from "axios";

const initialState = {
  books: [
    {
      _id: "60c877fa1165d89cef8d025d",
      available: false,
      title: "Chemistry Book",
      author: "Ahmed Zewil",
      description:
        "This Special Issue discusses the advances that are starting to reshape the field as data science meets chemistry.",
      picture: "data-science-meets-chemistry_cover.jpg-1623750650156",
      __v: 0,
    },

    {
      _id: "60c878ef1165d89cef8d025e",
      available: false,
      title: "Painted Word",
      author: "Wolfe, Tom",
      description:
        "Mass Market Paperback. Condition: Near Fine. unused book / old store stock; clean, tight and square, no spine crease, no tears or other creases, text is clean and unmarked, pages and inside covers are very lightly yellowed.",
      picture: "Story-Art-Gombrich.jpg-1623750895372",
      __v: 0,
    },

    {
      _id: "60c879551165d89cef8d025f",
      available: false,
      title: "Philosophy of Andy Warho",
      author: "Warhol, Andy",
      description:
        "SuperBookDeals.com is your top source for finding new books at the absolute lowest prices, guaranteed ! We offer big discounts - everyday - on millions of titles in virtually any category, from Architecture to Zoology -- and everything in between. Discover great deals and super-savings, on professional books, text book titles, the newest computer guides, or your favorite fiction authors. ",
      picture: "andy.jpg-1623750997995",
      __v: 0,
    },

    {
      _id: "60c879af1165d89cef8d0260",
      available: false,
      title: "The Beautiful Ones\n",
      author: "PRINCE",
      description:
        "The brilliant coming-of-age-and-into-superstardom story of one of the greatest artists of all time, in his own words—featuring never-before-seen photos, original scrapbooks and lyric sheets, and the exquisite memoir he began writing before his tragic death",
      picture: "booksm.jpeg-1623751087242",
      __v: 0,
    },

    {
      _id: "60c87a011165d89cef8d0261",
      available: false,
      title: "A Dream About Lightning Bugs",
      author: "Ben Folds",
      description:
        "From the genre-defying icon Ben Folds comes a memoir that is as nuanced, witty, and relatable as his cult-classic songs.",
      picture: "boom.jpeg-1623751169152",
      __v: 0,
    },

    {
      _id: "60c87a591165d89cef8d0262",
      available: false,
      title: "My Own Devices\n",
      author: "DESSA",
      description:
        "I love the way Dessa puts words together. In her songs, in her poetry, in her short stories, and now in this beautiful and candid memoir.  Wanna be an artist? Get this book.",
      picture: "boommy.jpeg-1623751257879",
      __v: 0,
    },
  ],
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
    // axios.get("http://localhost:5000/books/books").then((res) => {
    //   console.log(res.data.data, " from reducer");
    //   return {
    //     ...state,
    //     books: state.books.push(res.data.data),
    //   };
    // });

    default:
      return {
        ...state,
      };
  }
}
