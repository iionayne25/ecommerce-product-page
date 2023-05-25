import React, { useState } from 'react'
import Description from './Description'
import Selector from './Selector'
import Carousel from './Carousel'
import Header from './Header'

const ParentComponent = () => {
  const [selectValue, setSelectValue] = useState(0);
  const [isDelete,setIsDelete] = useState(false);

  const handleValueChange =(value) =>{
    setSelectValue(value)
    setIsDelete(false)
  }
  const handleDelete =()=>{
   setSelectValue(0)
  }
  console.log('setSelectValue:',selectValue)
  return (
    <>
      <Header value={selectValue} selectDelete={handleDelete}/>
      <div className='flex flex-col gap-4'>
      <Carousel />
      <Description/>
      <Selector onValueChange ={handleValueChange}/>
      </div>
     
    </>
  )
}

export default ParentComponent
