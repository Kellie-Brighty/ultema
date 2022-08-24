import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import CarouselControls from "./CarouselControls";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["img 1", "img 2", "img 3", "img 4", "img 5", "img 6"];
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel_inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        <div className="carousel_item">
          <img src="Rect 1.png" />
        </div>
        <div className="carousel_item">
          <img src="Rect 2.png" />
        </div>
        <div className="carousel_item">
          <img src="Rect 3.png" />
        </div>
        <div className="carousel_item">
          <img src="Rect 4.png" />
        </div>
        <div className="carousel_item">
          <img src="Rect 5.png" />
        </div>
        <div className="carousel_item">
          <img src="Rect 6.png" />
        </div>
      </div>

      <CarouselControls />
    </div>
  );
};

export default Carousel;
