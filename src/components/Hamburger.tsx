"use client"
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Hamburger = () => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
         
    }, [])


  return (
    <div className="dropdown dropdown-end block sm:hidden bg-primary">
    <label tabIndex={0} className="btn m-1 bg-primary border-none"> <RxHamburgerMenu className="w-[2.5rem] h-[2.5rem] p-2 text-sm cursor-pointer text-white bg-base-100" /> </label>
    <ul tabIndex={0} className="dropdown-content z-50 text-center text-lg text-white menu p-2 shadow bg-base-100 w-52">
         <li className="cursor-pointer hover:bg-primary transition-all px-4"> Home </li> 
         <li className="cursor-pointer hover:bg-primary transition-all px-4"> Calculator </li> 
         <li className="cursor-pointer hover:bg-primary transition-all px-4"> Lists </li>
         <li className="cursor-pointer hover:bg-primary transition-all px-4"> About </li> 
         <li className="cursor-pointer hover:bg-primary transition-all px-4"> Test  </li> 
    </ul>
</div>
    )
}

export default Hamburger