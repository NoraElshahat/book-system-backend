import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AllBooks from './components/books/list-books';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AllBooks />
      </Router>
    </div>
  );
}

export default App;
