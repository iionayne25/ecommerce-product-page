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
  const [isOpen, setIsOpen] = useState(false);

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

  const handleClickThumbnail = (index) => {
    setCurrentIndex(index);
  };

  const handleClickImage = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const [hoveredElement, setHoveredElement] = useState(null);
  const handleMouseEnter = (elementId) => {
    setHoveredElement(elementId);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  return (
    <>
      {isOpen ? (
        <div>
          <div className="hidden xl:absolute xl:top-0 xl:left-0 xl:flex xl:flex-col xl:gap-6 xl:justify-center xl:items-center xl:bg-black/75 xl:pb-0 xl:w-screen xl:h-full xl:z-30">
            <div className="flex flex-col gap-4">
              <div
                className="flex justify-end items-end "
                onMouseEnter={() => handleMouseEnter("close")}
                onMouseLeave={handleMouseLeave}
                onClick={handleClose}
              >
                <svg
                  className="w-fit h-fit"
                  width="16"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill={`${hoveredElement === "close" ? "orange" : "#fff"}`}
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                onClick={() => handleClickImage(currentIndex)}
                className="xl:flex xl:flex-col xl:gap-6"
              >
                <div
                  style={{ backgroundImage: `url(${images[currentIndex]})` }}
                  className="w-full h-[300px] bg-cover xl:bg-contain xl:w-80 xl:h-[400px] xl:rounded-xl xl:flex xl:flex-col "
                ></div>
                <div className="hidden xl:flex xl:justify-center xl:gap-5">
                  <div
                    className={` ${currentIndex === 0 ? "select-index" : ""}`}
                    onClick={() => handleClickThumbnail(0)}
                  >
                    <Image
                      src="/images/image-product-1-thumbnail.jpg"
                      width={80}
                      height={80}
                      alt="next icon"
                      className={`thumbnail ${
                        currentIndex === 0 ? "thumbnail-select" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={` ${currentIndex === 1 ? "select-index" : ""}`}
                    onClick={() => handleClickThumbnail(1)}
                  >
                    <Image
                      src="/images/image-product-2-thumbnail.jpg"
                      width={80}
                      height={80}
                      alt="next icon"
                      className={`thumbnail ${
                        currentIndex === 1 ? "thumbnail-select" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={` ${currentIndex === 2 ? "select-index" : ""}`}
                    onClick={() => handleClickThumbnail(2)}
                  >
                    <Image
                      src="/images/image-product-3-thumbnail.jpg"
                      width={80}
                      height={80}
                      alt="next icon"
                      className={`thumbnail ${
                        currentIndex === 2 ? "thumbnail-select" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={` ${currentIndex === 3 ? "select-index" : ""}`}
                    onClick={() => handleClickThumbnail(3)}
                  >
                    <Image
                      src="/images/image-product-4-thumbnail.jpg"
                      width={80}
                      height={80}
                      alt="next icon"
                      className={`thumbnail ${
                        currentIndex === 3 ? "thumbnail-select" : ""
                      }`}
                    />
                  </div>
                </div>

                {/*arrow next, prev */}
                <div
                  onClick={prevSlide}
                  onMouseEnter={() => handleMouseEnter("prev")}
                  onMouseLeave={handleMouseLeave}
                  className=" rotate-180 arrow-container-left xl:flex xl:z-30 xl:left-[500px] xl:top-[300px] "
                >
                  <svg
                    width="13"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m2 1 8 8-8 8"
                      stroke={`${
                        hoveredElement === "prev" ? "orange" : "#1D2026"
                      }`}
                      stroke-width="3"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  onClick={nextSlide}
                  onMouseEnter={() => handleMouseEnter("next")}
                  onMouseLeave={handleMouseLeave}
                  className="arrow-container-right xl:flex xl:z-30 xl:right-[500px] xl:top-[300px]"
                >
                  <svg
                    width="13"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m2 1 8 8-8 8"
                      stroke={`${
                        hoveredElement === "next" ? "orange" : "#1D2026"
                      }`}
                      stroke-width="3"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/*Background Image Caousel*/}
          <div
            onClick={() => handleClickImage(currentIndex)}
            className="xl:flex xl:flex-col xl:gap-6"
          >
            <div
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
              className="w-full h-[300px] bg-cover xl:bg-contain xl:w-80 xl:h-[400px] xl:rounded-xl xl:flex xl:flex-col "
            ></div>
            <div className="hidden xl:flex xl:justify-center xl:gap-5">
              <div
                className={` ${currentIndex === 0 ? "select-index" : ""}`}
                onClick={() => handleClickThumbnail(0)}
              >
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  width={80}
                  height={80}
                  alt="thumbnail product 1"
                  className={`thumbnail ${
                    currentIndex === 0 ? "thumbnail-select" : ""
                  }`}
                />
              </div>
              <div
                className={` ${currentIndex === 1 ? "select-index" : ""}`}
                onClick={() => handleClickThumbnail(1)}
              >
                <Image
                  src="/images/image-product-2-thumbnail.jpg"
                  width={80}
                  height={80}
                  alt="thumbnail product 2"
                  className={`thumbnail ${
                    currentIndex === 1 ? "thumbnail-select" : ""
                  }`}
                />
              </div>
              <div
                className={` ${currentIndex === 2 ? "select-index" : ""}`}
                onClick={() => handleClickThumbnail(2)}
              >
                <Image
                  src="/images/image-product-3-thumbnail.jpg"
                  width={80}
                  height={80}
                  alt="thumbnail product 3"
                  className={`thumbnail ${
                    currentIndex === 2 ? "thumbnail-select" : ""
                  }`}
                />
              </div>
              <div
                className={` ${currentIndex === 3 ? "select-index" : ""}`}
                onClick={() => handleClickThumbnail(3)}
              >
                <Image
                  src="/images/image-product-4-thumbnail.jpg"
                  width={80}
                  height={80}
                  alt="thumbnail product 4"
                  className={`thumbnail ${
                    currentIndex === 3 ? "thumbnail-select" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="xl:flex xl:flex-col xl:gap-6">
            <div
              onClick={() => handleClickImage(currentIndex)}
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
              className="h-[300px] bg-cover xl:bg-contain xl:w-[420px] xl:h-[420px] xl:rounded-xl xl:flex xl:flex-col "
            ></div>
            <div className="hidden xl:flex xl:justify-center xl:gap-5">
              <div
                className={` ${currentIndex === 0 ? "select-index " : ""}`}
                onClick={() => handleClickThumbnail(0)}
              >
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  width={60}
                  height={70}
                  alt="thumbnail product 1"
                  className={`thumbnail ${
                    currentIndex === 0 ? "thumbnail-select " : ""
                  }`}
                />
              </div>
              <div
                className={` ${currentIndex === 1 ? "select-index" : ""}`}
                onClick={() => handleClickThumbnail(1)}
              >
                <Image
                  src="/images/image-product-2-thumbnail.jpg"
                  width={80}
                  height={80}
                  alt="thumbnail product 2"
                  className={`thumbnail ${
                    currentIndex === 1 ? "thumbnail-select" : ""
                  }`}
                />
              </div>
              <div
                className={` ${currentIndex === 2 ? "select-index" : ""}`}
                onClick={() => handleClickThumbnail(2)}
              >
                <Image
                  src="/images/image-product-3-thumbnail.jpg"
                  width={80}
                  height={80}
                  alt="thumbnail product 3"
                  className={`thumbnail ${
                    currentIndex === 2 ? "thumbnail-select" : ""
                  }`}
                />
              </div>
              <div
                className={` ${currentIndex === 3 ? "select-index" : ""}`}
                onClick={() => handleClickThumbnail(3)}
              >
                <Image
                  src="/images/image-product-4-thumbnail.jpg"
                  width={80}
                  height={80}
                  alt="thumbnail product 4"
                  className={`thumbnail ${
                    currentIndex === 3 ? "thumbnail-select" : ""
                  }`}
                />
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
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
