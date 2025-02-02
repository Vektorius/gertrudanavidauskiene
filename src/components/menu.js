import React, {useContext} from "react";
import './MobileMenu.css'; // Import the CSS file
import { changeMenu } from "./helper";
import { Context } from '../appContext';

const Menu = () => {
  const context = useContext(Context);
  
    
  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-start" 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        fontFamily: 'Courier New', 
        color: 'black', 
        width: '25vw', 
        height: '30vh', 
        position: 'absolute', 
        top: '7vh', 
        left: 0, 
        paddingLeft: '8.33vw', // 1/3 of 25vw
        fontSize: 'large'
      }}
    >
      <ul className="list-unstyled" style={{ width: '100%' }}>
        <li className="my-3"><span className="menu-option" onClick={() => {changeMenu(context, 0)}}>Gertrūda Navidauskienė</span></li>
        <li className="my-3"><div className="menu-option text-black text-decoration-none" onClick={() => {changeMenu(context, 1)}}>Info</div></li>
        <li className="my-3"><div className="menu-option text-black text-decoration-none" onClick={() => {changeMenu(context, 2)}}>Exhibitions</div></li>
        <li className="my-3"><div className="menu-option text-black text-decoration-none" onClick={() => {changeMenu(context, 3)}}>Work</div></li>
        <li className="my-3"><div className="menu-option text-black text-decoration-none" onClick={() => {changeMenu(context, 4)}}>Shop</div></li>
      </ul>
    </div>
  );
};

export default Menu;