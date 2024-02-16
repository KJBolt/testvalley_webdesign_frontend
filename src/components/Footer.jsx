import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { SlHeart } from "react-icons/sl";
import { CiUser } from "react-icons/ci";

function Footer() {
  return (
    <div className='w-[100%] h-[70px] lg:hidden flex justify-center items-center sticky bottom-0'>
        <div className='sm:w-[400px] w-[400px] h-[100%] flex justify-between items-center bg-white sm:px-2 px-5'>
            <div className='flex flex-col items-center justify-center'>
                <GoHomeFill className='text-[20px] text-[#00d094]' />
                <p className='text-[11px] text-gray-600'>Home</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <IoSearchOutline className='text-[20px] text-gray-600'/>
                <p className='text-[11px] text-gray-600'>Search</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <IoIosMenu className='text-[20px] text-gray-600'/>
                <p className='text-[11px] text-gray-600'>Category</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <SlHeart className='text-[20px] text-gray-600'/>
                <p className='text-[11px] text-gray-600'>Great</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <CiUser className='text-[20px] text-gray-600'/>
                <p className='text-[11px] text-gray-600'>My Page</p>
            </div>
        </div>
    </div>
  )
}

export default Footer