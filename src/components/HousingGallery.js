import React, { useState } from "react";

export default function HousingGallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    if (pictures[currentIndex] !== pictures[0]) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(pictures.length - 1);
    }
  };
  const next = () => {
    if (pictures[currentIndex] !== pictures[pictures.length - 1]) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  
  return (
    <div className="housing-gallery">
      {pictures.length > 1 ? (
        <>
          <i
            className="fa-solid fa-angle-left housing-gallery-arrow"
            onClick={previous}
          ></i>
          <i
            className="fa-solid fa-angle-right housing-gallery-arrow"
            onClick={next}
          ></i>
        </>
      ) : null}
      <img src={pictures[currentIndex]} alt="Pièce du logement" className="housing-gallery-picture" />
      <div className="housing-gallery-count">{currentIndex+1}/{pictures.length}</div>
    </div>
  );
}
