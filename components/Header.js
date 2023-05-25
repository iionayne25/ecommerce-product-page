import React from 'react'
import Image from 'next/image'
import SideBar from './SideBar'
const Header = () => {
  return (
    <div className='flex justify-between bg-white my-4 px-6'>
      <div className='flex gap-2 items-center justify-center'>
        <SideBar/>
        <p className='font-bold text-2xl align-text-moddle '>sneakers</p>
      </div>
      <div className='flex gap-4 items-center'>
        <Image
        src="/images/icon-cart.svg" width={22} height={20} alt='cart icon'
        className='h-fit'/>
        <Image
        src="/images/image-avatar.png" width={20} height={20} alt='avatar image'
        className='h-fit'/>
      </div>
    </div>
  )
}

export default Header
