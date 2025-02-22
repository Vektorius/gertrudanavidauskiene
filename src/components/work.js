import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import infoImg from "../util/infoImg.jpg"; // Import image
import './work.css';
import ImageGallery from "./imageGallery";
import { text2015 } from "./galleryText";


const Work = () => {
  const [year, setYear] = useState(0);

  return (
    <div 
      className="work-container"
      style={{ 
        fontFamily: "Courier New",
        color: "black",
        padding: "5vh 5vw",  // Reduced padding
        maxWidth: "800px", // Prevent overly wide text
        textAlign: "left"
      }}
    >
      <div style={
        {
          height: "30px",
        }
      }/>
    Soon

    </div>
  );
};

export default Work;

    /*{ year === 0 ?
    <p style={{ marginBottom: "1rem" }}>  
        <br />
        <br />
        <div className="selectYear" onClick={() => {setYear(2025)}}>2025</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2024)}}>2024</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2023)}}>2023</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2022)}}>2022</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2021)}}>2021</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2020)}}>2020</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2019)}}>2019</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2018)}}>2018</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2017)}}>2017</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2016)}}>2016</div>
        <br className="large-break"/>
        <br className="large-break"/>
        <div className="selectYear" onClick={() => {setYear(2015)}}>2015</div>

    </p> :
    <></>
    }
    { year === 2015 ? 
    <ImageGallery year={2015} imageCount={4} text={text2015} textPosition={[0]}/> : <></>}
    */