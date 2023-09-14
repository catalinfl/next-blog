"use client"
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"
import Link from 'next/link'
import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <div className="bg-primary font-bold">
    <div className="max-w-[1280px] mx-auto flex justify-center items-center flex-row p-4"> 
        <Link href="/"> 
        <div className="flex flex-row items-center">
            <li className="list-none cursor-pointer text-[1.5rem] text-white"> MyBlog </li>
        </div>
        </Link>
        <div className="w-full flex flex-row items-center ml-12 justify-between sm:px-0 sm:justify-end">
            <input type="text" className="input input-bordered bg-secondary font-medium text-[1.1rem] flex max-w-[500px] mr-3 sm:mr-0 w-full" />
            <BsSearch className="text-grey-700 text-[1.5rem] text-white hidden sm:block cursor-pointer ml-2 mr-5 md:mr-0"/>
            <Hamburger />
        </div>
        <div className="md:flex-row ml-12 justify-center hidden md:flex sm:justify-end">
            <div className="join join-horizontal hidden md:flex">
            <Link href="/">
            <button className="btn join-item bg-secondary hover:text-white">Home</button>
            </Link>
            <button className="btn join-item bg-secondary hover:text-white">About</button>
            <button className="btn join-item bg-secondary hover:text-white">Contact</button>
            <button className="btn join-item bg-base-100 hover:text-white">Login</button>
            </div>
        </div>
     </div>
    </div>
    )
}

export default Navbar