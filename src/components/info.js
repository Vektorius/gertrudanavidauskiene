import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import infoImg from "../util/infoImg.jpg"; // Import image
import './info.css';

const InfoPage = () => {
  return (
    <div 
      className="info-container"
      style={{ 
        fontFamily: "Courier New",
        color: "black",
        marginLeft: "28vw",  // Move it to the left on desktop
        padding: "5vh 5vw",  // Reduced padding
        maxWidth: "800px", // Prevent overly wide text
        textAlign: "left"
      }}
    >
      <img 
        src={infoImg} 
        alt="Info" 
        style={{ 
          width: "100%", 
          maxWidth: "600px", 
          height: "auto", 
          marginTop: "1rem" // Space after text
        }} 
      />
    <p style={{ marginBottom: "1rem" }}>  
        <br />
        <br />
        b. 1999, Lithuania

        <br />
        <br/>
        gertruda.navidauskiene@gmail.com 

        <br />
        <br />
        <br />
        <br />
    </p>


      <p style={{ marginBottom: "1rem" }}>
        <strong>Education</strong>  
        <br /> {/* Line break */}
        <br />
        <br />
        2023-2025 MA, Art therapy
        <br />
        <br/>
        2018-2022 BA, Psychology
        <br/>
        <br />
        2018-2022 BA, Philology
        <br />
        <br />
        2014-2018 Vilnius lyceum
        <br />
        <br />
        <br />
      </p>


      <p style={{ marginBottom: "1rem" }}>
        <strong>Art education </strong>  
        <br /> {/* Line break */}
        <br/>
        <br />
        2009-2011 Private painting and drawing lessons with Lithuanian Painter Vida Janina Jovaišienė 
        <br />
        <br/>
        2011-2015 Vilnius Justinas Vienožinskis Art School, 4 year program, classes on composition, drawing, painting, graphics, sculpture, ceramics and art history 
        <br/>
        <br />
        2015-2016 Vilnius Academy of Arts, course on architecture with Lithuanian architect Juozas Palaima
        <br/>
        <br />
        2016 Vilnius College of Design, course on computer graphics with Simonas Darongauskas
        <br/>
        <br />
        2016-2017 Vilnius College of Design, course on filmmaking with Lithuanian film director Aistė Žegulytė 
        <br/>
        <br />
        2017 Vilnius film festival project on filmmaking with film directors Andrius Blaževičius, Maratas Sargsyanas and Mikas Žukauskas
        <br />
        <br />
        <br />
      </p>

      <p style={{ marginBottom: "1rem" }}>

        <strong>Social media </strong>  
        <br /> {/* Line break */}
        <br />
        <a 
            className="socialLink"
            href="https://www.instagram.com/paisalioju" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "none" }}
        >
            Instagram @paisalioju
        </a>
      </p> 

      
    </div>
  );
};

export default InfoPage;
