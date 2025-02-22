import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import plakatas from "../util/Plakatas.jpeg"; // Import image
import './exh.css';

const Exhibition = () => {
  return (
    <div 
      className="exhibition-container"
      style={{ 
        fontFamily: "Courier New",
        color: "black",
        padding: "5vh 5vw",  // Reduced padding
        maxWidth: "800px", // Prevent overly wide text
        textAlign: "left"
      }}
    >
      
    <p style={{ marginBottom: "1rem" }}>  
        <br />
        <br />
        Happening now : ĮKYRUMAI / IMPORTUNITY    
        <br/>
        <br/>
        <a 
            className="socialLink"
            href="https://www.facebook.com/events/1658670891405771/1658670928072434/?active_tab=about" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "none" }}
        >
            Event Link
        </a>

        <img 
                src={plakatas} 
                alt="Info" 
                style={{ 
                  width: "100%", 
                  maxWidth: "600px", 
                  height: "auto", 
                  marginTop: "1rem" // Space after text
                }} 
              />

    </p>



      
    </div>
  );
};

export default Exhibition;
