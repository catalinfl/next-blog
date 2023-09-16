"use client"
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { useRouter } from "next/navigation"
const Create = () => {

    const [textarea, setTextarea] = useState<string>("")
    const session = useSession()
    const router = useRouter()
    const { status } = session

  return (
    <> 
    {status === "authenticated" 
    ? <div className="bg-white mx-auto flex flex-col max-w-[1080px] w-full my-8 py-4"> 
        <div className="max-w-[968px] mx-auto w-full flex flex-col gap-2"> 
        <p className="text-[1.5rem]"> Title </p> 
        <input className="input border-none w-full border-b-4 outline-none border-b-black rounded-none text-[1.25rem] text-white" />
        </div>
        <div className="max-w-[968px] mx-auto w-full flex flex-col mt-4 gap-2"> 
        <p className="text-[1.5rem]"> Description </p> 
        <textarea value={textarea} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextarea(e.target.value)} className="textarea placeholder:text-white rounded-none text-[1.25rem] text-white h-[400px]" placeholder="Description" /> 
        <p className="text-[1.25rem] font-bold mt-4 text-center"> Image </p> 
        <input type="file" className="file-input file-input-bordered file-input-primary max-w-sm mx-auto" />
        <div className="flex justify-center gap-3 items-center border-2 border-base-100 transition-all hover:bg-base-100 p-2 hover:text-white cursor-pointer w-[200px] mt-4 mx-auto">
        <AiOutlineFileAdd className="text-[2.5rem]"/>
        <p className="text-[2rem]"> Add </p>
        </div>
        </div>
    </div>
    :
    <div className="bg-white mx-auto flex flex-col rounded-lg max-w-[1080px] w-full my-8 py-4">
        <p className="text-[1.5rem] text-center"> You need to be logged in to create a post. </p>
        <button className="btn btn-primary flex mx-auto mt-4 p-4" onClick={() => router.push("/login")}> Click here to go to login</button>
    </div>
  }
  </>
    )
}

export default Create