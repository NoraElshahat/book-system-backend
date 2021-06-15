import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AllBooks from "./components/books/list-books";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/books" exact component={AllBooks}></Route>
      </Router>
    </div>
  );
}

export default App;
