import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './work.css';
import './generator.css';
import { drawCombined, clearCanvas } from "./Renderer";

import X1 from '../util/generator/X1.png';
import X2 from '../util/generator/X2.png';
import X3 from '../util/generator/X3.png';
import X4 from '../util/generator/X4.png';
import X5 from '../util/generator/X5.png';
import X6 from '../util/generator/X6.png';
import X7 from '../util/generator/X7.png';

import Y1 from '../util/generator/Y1.png';
import Y2 from '../util/generator/Y2.png';
import Y3 from '../util/generator/Y3.png';
import Y4 from '../util/generator/Y4.png';
import Y5 from '../util/generator/Y5.png';
import Y6 from '../util/generator/Y6.png';
import Y7 from '../util/generator/Y7.png';

import Z1 from '../util/generator/Z1.png';
import Z2 from '../util/generator/Z2.png';
import Z3 from '../util/generator/Z3.png';
import Z4 from '../util/generator/Z4.png';
import Z5 from '../util/generator/Z5.png';
import Z6 from '../util/generator/Z6.png';
import Z7 from '../util/generator/Z7.png';






const Generator = () => {
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [z, setZ] = useState([]);

  function changeAppearance(btn) {
    let button = document.getElementById(btn);
    button.classList.toggle("generatorButtonClicked");    
  }

  function clearSelectedButtons() {
    document.querySelectorAll('.generatorButton').forEach(button => {
        button.classList.remove('generatorButtonClicked');
    });
  }

  const addItemX = (item) => {
    setX((prevItems) => {
      if (prevItems.includes(item)) {
        return prevItems.filter((i) => i !== item);
      } else {
        return [...prevItems, item]; 
      }
    });
  };

  const addItemY = (item) => {
    setY((prevItems) => {
      if (prevItems.includes(item)) {
        return prevItems.filter((i) => i !== item);
      } else {
        return [...prevItems, item]; 
      }
    });
  };

  const addItemZ = (item) => {
    setZ((prevItems) => {
      if (prevItems.includes(item)) {
        return prevItems.filter((i) => i !== item);
      } else {
        return [...prevItems, item]; 
      }
    });
  };

  
  

  return (
    
    <div 
      className="work-container"
      style={{ 
        fontFamily: "Courier New",
        color: "black",
        padding: "5vh 5vw",  // Reduced padding
        maxWidth: "1000px", // Prevent overly wide text
        textAlign: "left"
      }}
    >
      <div style={{
        "margin-top": "20px",
        height : "20px",
        "overflow-wrap": "break-word",
        float: "left",
        "justify-content": "start",
        "align-items": "start",
        marginBottom: "20px"
      }}>
        I feel x because my y makes me feel z
      </div>
      <div style={{
        height : "20px"
      }}/>
      <div style={{
        display: "flex",
        "justify-content": "flex-start",
      }}>
      </div>
      
    <div className="buttonContainerBox">
    <div className="buttonContainer"> 
    
    X:
    <br/>
    <button id="x7" className="generatorButton" onClick={() => {
        changeAppearance("x7")
        addItemX(X1)
    }}
    >Happy</button>
    <button id="x1" className="generatorButton" onClick={() => {
        changeAppearance("x1")
        addItemX(X2)
    }}>Surprised</button>
    <button id="x2" className="generatorButton" onClick={() => {
        changeAppearance("x2")
        addItemX(X3)
    }}>Lame</button>     
    <button id="x3" className="generatorButton" onClick={() => {
        changeAppearance("x3")
        addItemX(X4)
    }}>Afraid</button> 
    <button id="x4" className="generatorButton" onClick={() => {
        changeAppearance("x4")
        addItemX(X5)
    }}>Angry</button>  
    <button id="x5" className="generatorButton" onClick={() => {
        changeAppearance("x5")
        addItemX(X6)
    }}>Disgusted</button> 
    <button id="x6" className="generatorButton" onClick={() => {
        changeAppearance("x6")
        addItemX(X7)
    }}>Sad</button> 
    <br/>
    </div>
    <div className="buttonContainer"> 
    Y:
    <br/>
    <button id="y7" className="generatorButton" onClick={() => {
        changeAppearance("y7")
        addItemY(Y1)
    }}
    >Happiness</button>
    <button id="y1" className="generatorButton" onClick={() => {
        changeAppearance("y1")
        addItemY(Y2)
    }}>Surprise</button>
    <button id="y2" className="generatorButton" onClick={() => {
        changeAppearance("y2")
        addItemY(Y3)
    }}>Lameness</button>     
    <button id="y3" className="generatorButton" onClick={() => {
        changeAppearance("y3")
        addItemY(Y4)
    }}>Fear</button> 
    <button id="y4" className="generatorButton" onClick={() => {
        changeAppearance("y4")
        addItemY(Y5)
    }}>Anger</button>  
    <button id="y5" className="generatorButton" onClick={() => {
        changeAppearance("y5")
        addItemY(Y6)
    }}>Disgust</button> 
    <button id="y6" className="generatorButton" onClick={() => {
        changeAppearance("y6")
        addItemY(Y7)
    }}>Sadness</button> 
    </div>
    <div className="buttonContainer"> 
    Z:
    <br/>
    <button id="Z7" className="generatorButton" onClick={() => {
        changeAppearance("Z7")
        addItemZ(Z1)
    }}
    >Happy</button>
    <button id="Z1" className="generatorButton" onClick={() => {
        changeAppearance("Z1")
        addItemZ(Z2)
    }}>Surprised</button>
    <button id="Z2" className="generatorButton" onClick={() => {
        changeAppearance("Z2")
        addItemZ(Z3)
    }}>Lame</button>  
    <br/>   
    <button id="Z3" className="generatorButton" onClick={() => {
        changeAppearance("Z3")
        addItemZ(Z4)
    }}>Fear</button> 
    <button id="Z4" className="generatorButton" onClick={() => {
        changeAppearance("Z4")
        addItemZ(Z5)
    }}>Afraid</button>  
    <button id="Z5" className="generatorButton" onClick={() => {
        changeAppearance("Z5")
        addItemZ(Z6)
    }}>Disgusted</button> 
    <button id="Z6" className="generatorButton" onClick={() => {
        changeAppearance("Z6")
        addItemZ(Z7)
    }}>Sad</button> 
    </div>
    </div>
    <div className="button-container">
      <button id="generateButton" onClick={() => {
        drawCombined("generatorCanvas", x, y, z)  
        setX([])
        setY([])
        setZ([])    
      }}>Generate</button>
      <button id="clearButton" onClick={() => {
        clearCanvas("generatorCanvas")
        clearSelectedButtons()
      }}>Clear</button>
    </div>
    <canvas id="generatorCanvas" ></canvas>
    <br/>
    <br/>
    This program allows you to choose from 7 different emotions (21 layers) 
    <br/>
    <br/>
    
    
      If you want to purchase a high quality custom xyz combination choosing from 130 different emotions (390 layers) contact me
      <br/>
      <br/>
      List of 130 emotions 

    </div>
  );
};

export default Generator;
