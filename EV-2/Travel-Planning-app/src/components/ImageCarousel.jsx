// src/components/ImageCarousel.jsx
import React, { useState } from 'react';
import './ImageCarousel.css';


const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="image-carousel">
            <button onClick={handlePrev} className="carousel-button prev-button">❮</button>
            <div className="carousel-slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <button onClick={handleNext} className="carousel-button next-button">❯</button>
        </div>
    );
};

export default ImageCarousel;
