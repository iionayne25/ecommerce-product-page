import React from "react";
import Image from "next/image";
import SideBar from "./SideBar";
import Cart from "./Cart";
const Header = ({ value, selectDelete }) => {
  return (
    <div className="flex justify-between bg-white items-center my-2 px-6 xl:px-0 xl:my-0  xl:h-20 xl:border-b xl:border-grayishBlue/50">
      <div className="flex h-full items-center justify-center xl:gap-10">
        <div className="flex h-full gap-2 justify-center items-center">
          <div className="md:hidden w-fit">
            <SideBar />
          </div>
            <p className="h-full flex justify-center items-center font-bold text-2xl">
              sneakers
            </p>
        </div>
        <div className="navbar-container">
          <p className="navbar-item">Collection</p>
          <p className="navbar-item">Men</p>
          <p className="navbar-item">Woman</p>
          <p className="navbar-item">About</p>
          <p className="navbar-item">Contact</p>
        </div>
      </div>
      <div className="flex gap-4 items-center xl:gap-8">
        <Cart value={value} selectDelete={selectDelete} />
        <Image
          src="/images/image-avatar.png"
          width={20}
          height={20}
          alt="avatar image"
          className="h-fit md:hidden"
        />
        <Image
          src="/images/image-avatar.png"
          width={45}
          height={45}
          alt="avatar image"
          className="xl:h-fit xl:block hidden rounded-full hover:ring-2 hover:ring-orange cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
