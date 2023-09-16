import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Hamburger = () => {
  return (
    <div className="dropdown dropdown-end block sm:hidden bg-primary">
    <label tabIndex={0} className="btn m-1 bg-primary border-none"> <RxHamburgerMenu className="w-[2.5rem] h-[2.5rem] p-2 text-sm cursor-pointer text-white bg-base-100" /> </label>
    <ul tabIndex={0} className="dropdown-content z-50 text-center text-lg text-white menu p-2 shadow bg-base-100 w-52">
        <Link href="/"> 
         <li className="cursor-pointer hover:bg-primary transition-all px-4"> Home </li> 
        </Link>
        <Link href="/create"> 
         <li className="cursor-pointer hover:bg-primary transition-all px-4"> Create </li> 
        </Link>
        <Link href="https://github.com/catalinfl"> 
         <li className="cursor-pointer hover:bg-primary transition-all px-4"> Contact </li>
        </Link>
        <Link href="/login">
         <li className="cursor-pointer hover:bg-primary transition-all px-4"> Login </li> 
        </Link>
    </ul>
</div>
    )
}

export default Hamburger