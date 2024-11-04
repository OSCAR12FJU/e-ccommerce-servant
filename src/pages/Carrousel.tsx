
import React, { useState, useEffect } from 'react';
import bannerHome from "../files/banneHome.jpg";

// interface CarrouselProps {
//   className: string;
// }

const Carrousel: React.FC = () => {
  const images = [
    "https://http2.mlstatic.com/D_NQ_743126-MLA79857028724_102024-OO.webp",
    "https://http2.mlstatic.com/D_NQ_2X_621683-MLA80110780065_102024-OO.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Cambiar automáticamente la diapositiva cada 3 segundos
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused,]);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  return (
    <div className={`relative w-full md:mt-20`}>
      {/* Carousel wrapper */}
      <div className={`relative h-56 overflow-hidden md:h-96 `}>
        {/* {images.map((image, index) => ( */}
          <div
            className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out`}
          >
          {/* <div
            key={index}
            className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          > */}
            <img
              src={bannerHome}
              className="w-full h-full object-cover"
              alt='banner home'
              // alt={`Slide ${index + 1}`}
              onMouseEnter={handlePause}
              onMouseLeave={handlePlay}
            />
          </div>
        {/* ))} */}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        onClick={handlePrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carrousel;
