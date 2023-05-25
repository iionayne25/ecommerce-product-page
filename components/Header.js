import React from 'react'
import Image from 'next/image'
import SideBar from './SideBar'
import Cart from './Cart'
const Header = ({value,selectDelete}) => {
  return (
    <div className='flex justify-between bg-white items-center my-2 px-6'>
      <div className='flex gap-2 items-center justify-center'>
        <SideBar/>
        <p className='font-bold text-2xl align-text-moddle '>sneakers</p>
      </div>
      <div className='flex gap-4 items-center'>
        <Cart value={value} selectDelete={selectDelete} />
        <Image
        src="/images/image-avatar.png" width={20} height={20} alt='avatar image'
        className='h-fit'/>
      </div>
    </div>
  )
}

export default Header
