import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import infoImg from "../util/infoImg.jpg"; // Import image
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
        2025.03.03 - 03.16 

        <br />
        <br/>
        ĮKYRUMAI

        <br />
        <br />

        LDS Projektų erdvė
        <br />
        <br />

    </p>



      
    </div>
  );
};

export default Exhibition;
