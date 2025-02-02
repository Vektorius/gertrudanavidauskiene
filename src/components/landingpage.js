import React from 'react';
import background from '../util/background.jpg';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div 
      className="landing-page" 
      style={{ 
        backgroundImage: `url(${background})`, 

        backgroundPosition: 'center', 
        width: '100vw', 
        height: '100vh' 
      }}
    >
      {/* Add your landing page content here */}
    </div>
  );
};

export default LandingPage;