import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import infoImg from "../util/infoImg.jpg"; // Import image
import './work.css';
import { drawCombined } from "./Renderer";
import ImageGallery from "./imageGallery";
import { text2015 } from "./galleryText";


const Generator = () => {
  const [x, setX] = useState(['1','2']);
  const [y, setY] = useState(['3','4']);
  const [z, setZ] = useState(['5','6']);

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
    X : <div></ div> Y: <div></div> Z: <div></div>
    <button onClick={() => {drawCombined("generatorCanvas", x, y, z)}}>Generate</button>
    <canvas id="generatorCanvas" width="250" height="250"></canvas>

    </div>
  );
};

export default Generator;
