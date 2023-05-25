import React, { useState } from "react";
import Image from "next/image";
const Cart = ({ value,selectDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

 const handleDelete = () => {
    selectDelete(true)
 }
  console.log("Sent to cart:", value);

  return (
    <>
      {isOpen ? (
        value !== 0 ? (
          <div>
            <Image
              src="/images/icon-cart.svg"
              width={22}
              height={20}
              alt="cart icon"
              className="h-fit"
              onClick={handleToggle}
            />
            <div
              className="bg-orange px-1.5 flex font-bold justify-center text-[9px] text-white rounded-xl
          absolute top-3 right-12"
            >
              {value !== 0 ? value : ""}
            </div>

            <div className={`cart ${isOpen ? "open" : ""}`}>
              <div className="flex font-bold">Cart</div>
              <hr className="self-center w-[358px] h-1 text-grayishBlue" />
              <div className="flex gap-2 justify-between items-center">
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  width={55}
                  height={55}
                  alt="product 1 thumnail"
                  className="rounded-sm"
                />
                <div className="flex flex-col gap-1 text-darkGrayishBlue">
                  <p>Fall Limited Edition Sneakers</p>

                  <p>
                    $125.00 x {value}{" "}
                    <span className="font-bold text-black">
                      ${value * 125}.00
                    </span>
                  </p>
                </div>
                <Image
                  src="/images/icon-delete.svg"
                  width={14}
                  height={16}
                  alt="delete icon"
                  className="h-fit"
                  onClick={handleDelete}
                />
              </div>
              <button className="bg-orange w-full py-3.5 rounded-md text-white text-xs font-bold ">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Image
              src="/images/icon-cart.svg"
              width={22}
              height={20}
              alt="cart icon"
              className="h-fit"
              onClick={handleToggle}
            />
            <div className="emptyCart">
              <div className="flex font-bold">Cart</div>
              <hr className="self-center w-[358px] h-1 text-grayishBlue" />
              <div className="flex justify-center items-center h-full">
                <p className="text-darkGrayishBlue  flex justify-center items-center font-bold text-sm">
                  Your cart is empty.
                </p>
              </div>
            </div>
          </div>
        )
      ) : (
        <div onClick={handleToggle}>
          <Image
            src="/images/icon-cart.svg"
            width={22}
            height={20}
            alt="cart icon"
            className="h-fit"
          />
          <div
            className="bg-orange px-1.5 flex font-bold justify-center text-[9px] text-white rounded-xl
        absolute top-3 right-12"
          >
            {value !== 0 ? value : ""}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
