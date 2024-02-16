import React from 'react';
import { IoIosMenu } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";

function Navbar() {
  return (
    <div className='w-[100%] lg:h-[70px] h-[60px] flex justify-center items-center bg-white sticky top-0 z-[1000]'>

      {/* Inner Content */}
      <div className='xl:w-[70%] lg:w-[80%] bg-white md:w-[400px] sm:w-[400px] w-[400px] h-[100%] flex justify-between items-center lg:px-0 px-2'>
        {/* Left Section */}
        <div className='w-[30%]  flex justify-start items-center'>
          <img src={require('../assets/logo.png')} className='lg:h-[40px] h-[40px]' alt="logo" />
          <div className='justify-center items-center lg:flex hidden'>
            <IoIosMenu className='mr-[5px] text-[#4adeb3] font-bold'/>
            <p className='text-black'>category</p>
          </div>
        </div>
        

        {/* Search Section */}
        <div className='w-[35%] rounded-md border items-center lg:flex hidden'>
          <FiSearch className='w-[10%]'/>
          <input className='w-[90%] text-gray-400 text-sm py-3 border-0 outline-none' type="text" placeholder="If you're wondering whether to buy it or not," />
        </div>



        {/* Right Section */}
        <div className='flex justify-end items-center w-[30%]'>
          <div>
            <div className=' items-center lg:flex hidden'>
              <img src={require('../assets/arrow.png')} className='h-[30px]' alt="arrow" />
              <div className='text-gray-300 me-2'>|</div>
              <button className='text-'>Login/Sign up</button>
            </div>

            <div className='lg:hidden flex items-center justify-end'>
              <GoBell className='text-2xl mr-3 text-gray-500'/>
              <FiSearch className='text-2xl text-gray-500' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar