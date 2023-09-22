"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { FcGoogle } from "react-icons/fc"

const LoginBar = () => {
  return (
    <div className="flex flex-col bg-white mx-auto max-w-[1080px] h-[720px] gap-4 items-center justify-center border-4 my-4 p-4">
        <div className="flex flex-row border w-full max-w-[480px] mt-4 h-[100px] gap-3 mx-auto justify-center items-center transition-color hover:bg-blue-400 hover:text-white cursor-pointer" onClick={() => signIn("google")}>
            <FcGoogle className="text-[2rem]" />
            <p className="text-[1.35rem]"> Login using Google </p>
        </div>
        <div className="flex flex-row border w-full max-w-[480px] mt-4 h-[100px] gap-3 mx-auto justify-center items-center transition-color hover:bg-blue-700 hover:text-white cursor-pointer" onClick={() => signIn("facebook")}>
            <BsFacebook className="text-[2rem]" />
            <p className="text-[1.35rem]"> Login using Facebook </p>
        </div>
        <div className="flex flex-row border w-full max-w-[480px] mt-4 h-[100px] gap-3 mx-auto justify-center items-center transition-color hover:bg-gray-900 hover:text-white cursor-pointer" onClick={() => signIn("github")}>
            <BsGithub className="text-[2rem]" />
            <p className="text-[1.35rem]"> Login using Github </p>
        </div>
    </div>
  )
}

export default LoginBar