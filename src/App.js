import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import AnxiousPage from "./pages/AnxiousPage";
import SaviourPage from "./pages/Saviour";
import VillainPage from "./pages/Villain";
import ConfidentPage from "./pages/ConfidentPage";
import WorkocholicPage from "./pages/Workcholic";
import TruePage from "./pages/TruePage";
import EnigmaPage from "./pages/EnigmaPage";
import SmartPage from "./pages/SmartPage";
import InduldgePage from "./pages/InduldgePage";
import RomanticPage from "./pages/RomanticPage";

function App() {
  return (
      <>
          <Navbar />
          <div className="container">
              <Routes>
                  <Route path="/RosieTypes" element={ <HomePage /> } />
                  <Route path="/test" element={ <TestPage /> } />
                  <Route path="/anxious" element={ <AnxiousPage /> } />
                  <Route path="/saviour" element={ <SaviourPage /> } />
                  <Route path="/villain" element={ <VillainPage /> } />
                  <Route path="/confident" element={ <ConfidentPage /> } />
                  <Route path="/workaholic" element={ <WorkocholicPage /> } />
                  <Route path="/true" element={ <TruePage /> } />
                  <Route path="/enigma" element={ <EnigmaPage /> } />
                  <Route path="/smart" element={ <SmartPage /> } />
                  <Route path="/indulging" element={ <InduldgePage /> } />
                  <Route path="/romantic" element={ <RomanticPage /> } />
              </Routes>
          </div>
      </>
  )
}

export default App;
