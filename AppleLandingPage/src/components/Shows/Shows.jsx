import './Shows.css'
import React, { useState } from 'react';
import { dataShows } from '../../data/datashows';

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? dataShows.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === dataShows.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious}>&lt; Previous</button>
      <img src={dataShows[currentIndex].image} alt={`Show ${currentIndex}`} />
      <button onClick={goToNext}>Next &gt;</button>
    </div>
  );
}
