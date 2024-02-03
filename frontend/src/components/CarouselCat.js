import React, { useState, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const slidesPerPage = 3;

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = useCallback(() => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
  }, [slides.length]);

  // Auto slide change after every three seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [current, nextSlide]);

  const startSlice = current % slides.length;
  const slicedSlides = slides.slice(startSlice, startSlice + slidesPerPage);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex gap-4 transition-transform ease-out duration-300`}
        style={{
          transform: `translate3d(-${(current * (100 / slides.length))}%, 0, 0)`,
          backfaceVisibility: 'hidden',
        }}
      >
        {slicedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center h-96 w-full"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: `${100 / slidesPerPage}%`,
              height: '300px', // Set a consistent height for the images
              boxShadow: 'none !important', // Ensure no box-shadow
              border: 'none !important', // Ensure no border
              WebkitBoxShadow: 'none !important', // Ensure no Webkit box-shadow
            }}
          >
            <button className="cursor-pointer" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
              <Link to={`/${slide.urlGroup}`}>
                <BsFillArrowRightCircleFill color="#00a8e8" size={28} className="cursor-pointer" />
              </Link>
            </button>
          </div>
        ))}
      </div>
  
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill color="#fca311" />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill color="#fca311" />
        </button>
      </div>
  
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-3 h-3 cursor-pointer  ${
              i === current ? "bg-mpYellow" : "bg-mpBlue"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
