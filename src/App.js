import React, {useContext} from 'react';
import './App.css';
import Menu from './components/menu';
import MobileMenu from './components/mobileMenu';
import LandingPage from './components/landingpage';
import { Context } from './appContext';
import InfoPage from './components/info';
import Exhibition from './components/exhibitions';
import Work from './components/work';
import Generator from './components/generator';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";

const HomePage = () => {
  const context = useContext(Context);
  console.log(context.state.menuOption);
  return(
    <div className="d-flex">
        <div className="d-lg-none" style={{ position: 'absolute', zIndex: 2 }}>
          <MobileMenu />
        </div>
        <div className="d-none d-lg-block" style={{ flex: '1 0 33.33%', position: 'absolute', height: '100vh', zIndex: 1 }}>
          <Menu />
        </div>
        <div style={{ flex: '1 0 66.67%', zIndex: 0 }}>
          {
            (context.state.menuOption === 0 ? <LandingPage /> : <></>)          
          }       
          {
            (context.state.menuOption === 1 ? <InfoPage /> : <></>)
          }
          {
            (context.state.menuOption === 2 ? <Exhibition /> : <></>)
          }
          {
            (context.state.menuOption === 3 ? <Work /> : <></>)
          }
          {
            (context.state.menuOption === 4 ? <Generator /> : <></>)
          }
        </div>
      </div>
  )
}



const App = () => {

  return (
    <Router>
      <NavigationProvider>
        <Routes>
          <Route path="/gertrudanavidauskiene" element={<HomePage />} />
          <Route path="/gertrudanavidauskiene/generator" element={<Generator />} />
        </Routes>
      </NavigationProvider>
    </Router> 
  );
};

export default App;
