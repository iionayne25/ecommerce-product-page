import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      {isOpen ? (
          <div className={`sidebar z-10 ${isOpen ? "open" : ""}`}>
            <div className="h-full w-2/3 bg-white py-5 px-5 flex flex-col gap-10">
            <button className="" onClick={handleToggle}>
              <Image
                src="/images/icon-close.svg"
                width={14}
                height={15}
                alt="clode icon"
                className="w-fit"
              />
            </button>
            <div className="flex flex-col gap-4 font-bold text-lg">
              <p className="sidebarItem">Collections</p>
              <p className="sidebarItem">Men</p>
              <p className="sidebarItem">Woman</p>
              <p className="sidebarItem">About</p>
              <p className="sidebarItem">Contact</p>
            </div>
            </div>
          </div>
      ) : (
        <div>
          <Image
            onClick={handleToggle}
            src="/images/icon-menu.svg"
            width={16}
            height={15}
            alt="menu icon"
            loading="lazy"
          />
        </div>
      )}
    </>
  );
};

export default SideBar;
