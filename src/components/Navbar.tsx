"use client"
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = () => {

    const [searchBar, setSearchbar] = useState<string>("")

  return (
    <div className="bg-primary font-bold">
    <div className="max-w-[1280px] mx-auto flex justify-center items-center flex-row p-4"> 
        <div className="flex flex-row items-center">
            <li className="list-none cursor-pointer text-[1.5rem]"> MyBlog </li>
        </div>
        <div className="w-full flex flex-row items-center ml-12 justify-between sm:px-0 sm:justify-end">
            <input type="text" className="input input-bordered font-light flex max-w-[500px] mr-3 sm:mr-0 w-full" />
            <BsSearch className="text-grey-700 text-[1.5rem] hidden sm:block cursor-pointer ml-2 mr-5 md:mr-0"/>
            <RxHamburgerMenu className="text-grey-700 flex md:hidden text-[1.5rem] cursor-pointer "/>
        </div>
        <div className="md:flex-row ml-12 justify-center hidden md:flex sm:justify-end">
            <div className="join join-horizontal hidden md:flex">
            <button className="btn join-item">Home</button>
            <button className="btn join-item">About</button>
            <button className="btn join-item">Contact</button>
            <button className="btn join-item bg-base-100">Login</button>
            </div>
        </div>
     </div>
    </div>
    )
}

export default Navbar