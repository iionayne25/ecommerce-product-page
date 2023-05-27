import React, { useState } from "react";
import Image from "next/image";
const Cart = ({ value, selectDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    selectDelete(true);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      {isOpen ? (
        value !== 0 ? (
          <div
            onClick={handleToggle}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill={isHovered ? "#000" : "#69707D"}
                fill-rule="nonzero"
              />
            </svg>
            <div className="cart-label">{value !== 0 ? value : ""}</div>
            <div className={`cart ${isOpen ? "open" : ""}`}>
              <div className="flex font-bold text-sm">Cart</div>
              <hr className="line" />
              <div className="details-container">
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
                  className="h-fit cursor-pointer"
                  onClick={handleDelete}
                />
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        ) : (
          <div
            onClick={handleToggle}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill={isHovered ? "#000" : "#69707D"}
                fill-rule="nonzero"
              />
            </svg>
            <div className="emptyCart">
              <div className="flex font-bold">Cart</div>
              <hr className="line" />
              <div className="flex justify-center items-center h-full">
                <p className="empty-text">Your cart is empty.</p>
              </div>
            </div>
          </div>
        )
      ) : (
        <div
          onClick={handleToggle}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill={isHovered ? "#000" : "#69707D"}
              fill-rule="nonzero"
            />
          </svg>
          <div className="cart-label">{value !== 0 ? value : ""}</div>
        </div>
      )}
    </>
  );
};

export default Cart;
