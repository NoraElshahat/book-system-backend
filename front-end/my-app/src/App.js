import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AllBooks from "./components/books/list-books";
import oneBook from "./components/books/one-book";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/books" exact component={AllBooks}></Route>
        <Route path="/book/:id" exact component={oneBook}></Route>
      </Router>
    </div>
  );
}

export default App;
