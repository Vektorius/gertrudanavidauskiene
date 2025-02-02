import React, { useContext, useState } from "react";
import './MobileMenu.css'; // Import the CSS file
import { changeMenu } from "./helper";
import { Context } from '../appContext';

const MobileMenu = () => {
  const context = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div className="d-lg-none">
      <div className="relative">
        <div onClick={toggleMenu} className="menu-toggle text-black d-flex justify-content-center" style={{ fontFamily: 'Courier New', margin: '1rem', marginLeft: '24vw', cursor: 'pointer' }}>
          {isOpen ? "" : "Gertrūda Navidauskienė"}
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 bg-white text-black d-flex flex-column justify-content-center align-items-center" style={{ fontFamily: 'Courier New', width: '100vw', height: '94vh', zIndex: 1050 }}>
            <div onClick={toggleMenu} className="menu-close text-black" style={{ fontFamily: 'Courier New', textTransform: 'uppercase', position: 'absolute', top: '1rem', right: '1rem', cursor: 'pointer' }}>
              X
            </div>
            <ul className="text-center list-unstyled" style={{ marginTop: '2rem' }}>
              <li className="my-3"><div className="menu-option text-black text-decoration-none" onClick={() => {changeMenu(context, 1)
                toggleMenu()
              }}>Info</div></li>
              <li className="my-3"><div className="menu-option text-black text-decoration-none" onClick={() => {changeMenu(context, 2)
                toggleMenu()
              }}>Exhibitions</div></li>
              <li className="my-3"><div className="menu-option text-black text-decoration-none" onClick={() => {changeMenu(context, 3)
                toggleMenu()
              }}>Work</div></li>
              <li className="my-3"><div className="menu-option text-black text-decoration-none" onClick={() => {changeMenu(context, 4)
                toggleMenu()
              }}>Shop</div></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;