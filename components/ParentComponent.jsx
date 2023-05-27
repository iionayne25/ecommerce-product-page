import React, { useState } from "react";
import Description from "./Description";
import Selector from "./Selector";
import Carousel from "./Carousel";
import Header from "./Header";

const ParentComponent = () => {
  const [selectValue, setSelectValue] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectIndex, setSelectIndex] = useState(null);

  const handleValueChange = (value) => {
    setSelectValue(value);
    setIsDelete(false);
  };
  const handleDelete = () => {
    setSelectValue(0);
  };

  return (
    <div className="h-screen">
      <Header value={selectValue} selectDelete={handleDelete} />
      <div className="flex flex-col gap-4 xl:pt-10 xl:px-0 xl:flex-row xl:justify-center xl:items-center xl:gap-14">
        <div className="xl:w-1/2 xl:flex xl:justify-center">
          <Carousel />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 xl:w-1/2">
          <Description />
          <Selector onValueChange={handleValueChange} />
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;
