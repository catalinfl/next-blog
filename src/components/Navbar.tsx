"use client"
import React, { useContext, useState } from 'react'
import { BsSearch } from "react-icons/bs"
import Link from 'next/link'
import Hamburger from './Hamburger'
import { signOut, useSession } from 'next-auth/react'
import { PaginationContext } from '@/providers/PaginationProvider'

const Navbar = () => {
    const session = useSession()
    const { status } = session

    const handleLogout = () => {
        signOut({ redirect: true, callbackUrl: "/login"})
    }
    
    return (
    <div className="bg-primary font-bold">
    <div className="max-w-[1280px] mx-auto flex justify-center items-center flex-col sm:flex-row p-4"> 
        <Link href="/"> 
        <div className="flex flex-row items-center">
            <li className="list-none cursor-pointer text-white text-[1.25rem] my-2 sm:my-0 sm:text-[1.5rem]"> MyBlog </li>
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
            <Link href="/create">
            <button className="btn join-item bg-secondary hover:text-white">Create</button>
            </Link>
            <Link href="https://github.com/catalinfl">
            <button className="btn join-item bg-secondary hover:text-white">Contact</button>
            </Link>
            { status === "authenticated" ?
                <button className="btn join-item bg-base-100 hover:text-white" onClick={() => { handleLogout() }}> Logout </button>
            :
                <Link href="/login">
            <button className="btn join-item bg-base-100 hover:text-white">Login</button>
            </Link>
            }
            </div>
        </div>
     </div>
    </div>
    )
}

export default Navbar