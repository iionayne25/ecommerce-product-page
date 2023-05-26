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

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
  };

  const handleClickThumbnail =(index)=>{
    setCurrentIndex(index)
  }
  return (
    <>
      <div className="xl:flex xl:flex-col xl:gap-6">
        <div
           style={{ backgroundImage: `url(${images[currentIndex]})` }}
          className="w-full h-[300px] bg-cover xl:bg-contain xl:w-80 xl:h-[400px] xl:rounded-xl xl:flex xl:flex-col "
        >
          
        </div>
        <div className="hidden xl:flex xl:justify-center xl:gap-5">
          <div className={` ${currentIndex === 0 ?'select-index':""}`} onClick={()=>handleClickThumbnail(0)}>
            <Image
              src="/images/image-product-1-thumbnail.jpg"
              width={80}
              height={80}
              alt="next icon"
              className={`thumbnail ${currentIndex === 0 ? "thumbnail-select":""}`} 
            />
          </div>
          <div className={` ${currentIndex === 1 ?'select-index':""}`} onClick={()=>handleClickThumbnail(1)}>
            <Image
              src="/images/image-product-2-thumbnail.jpg"
              width={80}
              height={80}
              alt="next icon"
              className={`thumbnail ${currentIndex === 1 ? "thumbnail-select":""}`} 
            />
          </div>
          <div className={` ${currentIndex === 2 ?'select-index':""}`} onClick={()=>handleClickThumbnail(2)}>
            <Image
              src="/images/image-product-3-thumbnail.jpg"
              width={80}
              height={80}
              alt="next icon"
              className={`thumbnail ${currentIndex === 2 ? "thumbnail-select":""}`} 
            />
          </div>
          <div className={` ${currentIndex === 3 ?'select-index':""}`} onClick={()=>handleClickThumbnail(3)}>
            <Image
              src="/images/image-product-4-thumbnail.jpg"
              width={80}
              height={80}
              alt="next icon"
              className={`thumbnail ${currentIndex === 3 ? "thumbnail-select":""}`} 
            />
          </div>
          
        </div>
      </div>

      <div onClick={prevSlide} className="arrow-container-left ">
        <Image
          src="/images/icon-next.svg"
          width={13}
          height={18}
          alt="next icon"
          className="w-fit rotate-180 "
        />
      </div>
      <div onClick={nextSlide} className="arrow-container-right">
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
