import React from "react";

const Description = () => {
  return (
    <>
      <div className="flex flex-col gap-3 text-left justify-start items-start px-3">
        <p className="uppercase text-orange  text-[14px] ">sneaker company</p>
        <h1 className="font-bold text-2xl">Fall Limited Edition Sneakers</h1>
        <p className="text-darkGrayishBlue  ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-5 items-center font-bold ">
            <p className=" text-2xl">$125.00</p>
            <p className="text-xs text-orange bg-paleOrange px-2 py-1 rounded-xs">
              50%
            </p>
          </div>
          <div>
            {" "}
            <p className="text-grayishBlue text-base line-through">$250.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
