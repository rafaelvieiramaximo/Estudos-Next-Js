//Roda no lado do cliente
'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/Aphelios.jpeg",
  "/Jinx.jpg",
  "/RekSai.jpg"
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Slider {...settings} className="w-full max-w-4xl mx-auto">
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index + 1}`} className="w-full h-100 object-cover rounded-lg" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
