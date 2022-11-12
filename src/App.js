import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";

function App() {
  return (
      <>
          <Navbar />
          <div className="container">
              <Routes>
                  <Route path="/" element={ <HomePage /> } />
                  <Route path="/test" element={ <TestPage /> } />
              </Routes>
          </div>
      </>
  )
}

export default App;
