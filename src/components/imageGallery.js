import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Function to dynamically load images
const loadImages = (year, count) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    try {
      images.push(require(`../util/work${year % 100}${i}.jpg`)); // workYYX.jpg format
    } catch (error) {
      console.warn(`Image work${year % 100}${i}.jpg not found`);
    }
  }
  return images;
};

const ImageGallery = ({ year, imageCount = 6, text = [], textPosition = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = loadImages(year, imageCount); // Load images dynamically

  return (
    <div
      className="gallery-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : "flex-start",
        marginLeft: isMobile ? "auto" : "0",
        marginRight: isMobile ? "auto" : "0",
        marginTop: isMobile ? "5vh" : "0",
        textAlign: isMobile ? "left" : "left",
      }}
    >
      {/* Display Text Above All Images if 0 is in textPosition */}
      {textPosition.includes(0) &&
        text.map((txt, idx) =>
          textPosition[idx] === 0 ? (
            <p
              key={`text-above-${idx}`}
              style={{
                fontFamily: "Courier New",
                color: "black",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              {txt.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          ) : null
        )}

      {/* Display Image Thumbnails */}
      {images.map((image, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <img
            src={image}
            alt={`Work ${year} - ${index + 1}`}
            className="thumbnail"
            onClick={() => setSelectedImage(image)}
            style={{
              width: isMobile ? "80vw" : "400px",
              height: "auto",
              cursor: "pointer",
              borderRadius: "0px",
              transition: "transform 0.2s",
              display: "block",
            }}
          />
          {/* Display Text Below Certain Image Based on textPosition */}
          {text.map((txt, idx) =>
            textPosition[idx] === index + 1 ? (
              <p
                key={`text-below-${index}-${idx}`}
                style={{
                  fontFamily: "Courier New",
                  color: "black",
                  fontSize: "14px",
                  marginTop: "5px",
                }}
              >
                {txt.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            ) : null
          )}
        </div>
      ))}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="overlay"
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <img
            src={selectedImage}
            alt="Expanded"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "0px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
