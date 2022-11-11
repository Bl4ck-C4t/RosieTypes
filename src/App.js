import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import EnigmaPage from "./pages/EnigmaPage";
import AngelPage from "./pages/AngelPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
      <>
          <Navbar />
          <div className="container">
              <Routes>
                  <Route path="/" element={ <HomePage /> } />
                  <Route path="/type1" element={ <AngelPage /> } />
                  <Route path="/type2" element={ <EnigmaPage /> } />
                  <Route path="/test" element={ <TestPage /> } />
              </Routes>
          </div>
      </>
  )
}

export default App;
