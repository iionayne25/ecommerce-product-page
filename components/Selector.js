import React from "react";
import Image from "next/image";
import Svg, { Path } from "react-svg";

const Selector = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full px-4">
        <div className="bg-lightGrayishBlue w-full py-3 rounded-md flex justify-between items-center px-4">
          <Image
            src="/images/icon-minus.svg"
            width={12}
            height={4}
            alt="minus icon"
            className="h-fit"
          />
          <span className="font-bold"> 0</span>
          <Image
            src="/images/icon-plus.svg"
            width={12}
            height={4}
            alt="minus icon"
            className="h-fit"
          />
        </div>
        <div className="bg-orange flex justify-center py-3 rounded-lg">
          <button className="flex gap-3 text-sm font-bold items-center text-white">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fill-rule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Selector;
