import React from "react";

const Description = () => {
  return (
    <>
      <div className="description-container">
        <p className="uppercase text-orange font-bold text-[14px] ">
          sneaker company
        </p>
        <h1 className="font-bold text-2xl xl:text-[48px]">Fall Limited Edition Sneakers</h1>
        <p className="text-darkGrayishBlue xl:pt-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price-container">
          <div className="flex gap-5 items-center font-bold ">
            <p className=" text-2xl">$125.00</p>
            <p className="text-xs text-orange bg-paleOrange px-2 py-1 rounded-xs">
              50%
            </p>
          </div>
          <div>
            <p className="text-grayishBlue text-base line-through">$250.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
