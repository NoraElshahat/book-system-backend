import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Books from "./components/books/list-books";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/books" exact component={Books} ></Route>
      </Router>
    </div>
  );
}

export default App;
