import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home';
import Question from './pages/question';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/question' element={<Question/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
