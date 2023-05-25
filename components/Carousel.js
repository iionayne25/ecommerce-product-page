import React, { useState } from "react";
import Image from "next/image";
const Carousel = () => {
  const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide =()=>{
    const isFirstIndex = currentIndex ===0;
    const newIndex = isFirstIndex ? images.length -1 : currentIndex -1;
    setCurrentIndex(newIndex)
  }
  const nextSlide =()=>{
  const isLastSlide = currentIndex === images.length -1;
  const newSlide = isLastSlide ? 0: currentIndex+1;
  setCurrentIndex(newSlide)
  }
  return (
    <>
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-64 bg-cover "
      ></div>
      <div onClick={prevSlide}
      className="flex justify-center items-center w-8 h-8 bg-white rounded-full absolute top-40 left-4 cursor-pointer">
        <Image
          src="/images/icon-next.svg"
          width={13}
          height={18}
          alt="next icon"
          className="w-fit rotate-180 "
        />
      </div>
      <div onClick={nextSlide}
      className="flex justify-center items-center w-8 h-8 bg-white rounded-full absolute top-40 right-4 cursor-pointer">
        <Image
          src="/images/icon-next.svg"
          width={13}
          height={18}
          alt="next icon"
          className="w-fit"
        />
      </div>
    </>
  );
};

export default Carousel;
