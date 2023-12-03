import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { PiAddressBookLight } from "react-icons/pi";

function SideBar() {
  return (
    <div className='hidden md:block w-[300px]   shadow-xl h-[100vh]'>
      <div className='flex flex-col  items-center mt-16 mb-16'>
        <img className='w-[80px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" />
        <p className='font-mono font-bold text-xl'>Mohtashim Mir</p>
        <p className='text-gray-500 text-sm'>mir.mohtashim66@gmail.com</p>
      </div>

      <div className='text-gray-500 text-sm ml-4'>
        <p className='flex gap-1 items-center '><CiCalendarDate />  21-09-2001</p>


        <p className='flex gap-1 items-center '><FaPhoneAlt />
7780915676</p>
        <p className='flex gap-1 items-center '><PiAddressBookLight/>Srinagar,Jammu and Kashmir</p>
      </div>
    </div>
  )
}

export default SideBar
