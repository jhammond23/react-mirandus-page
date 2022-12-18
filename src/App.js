import './mirandushub/mirandushub.css';
import TopNavBar from './components/TopNavBar';
import { BubblesIn, BubblesOut, Humans, humans } from './components/Humans';
import { Dwarves, dwarves } from './components/Dwarves';
import DisplayBubbles from './components/DisplayBubbles';
import DisplayRace from './components/DisplayRace';
import Navbar from './components/ReactNavBar';
import DisplayBuildings from './components/pages/DisplayBuildings';
import DisplayDeeds from './components/pages/DisplayDeeds';
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import DropdownNavbar from './components/DropdownNavbar';
import Dropdown from './components/Dropdown';
import { useEffect, useState } from 'react';

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <div>
      <DropdownNavbar />
      <div className='down80'>
        <Routes>
          <Route path='/mirandushub' element={<Home />} />
          <Route className='r-background' path='/exemplars' element={<DisplayRace />} />
          <Route path='/deeds' element={<DisplayDeeds />} />
          <Route path='/buildings' element={<DisplayBuildings />} />
        </Routes>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
