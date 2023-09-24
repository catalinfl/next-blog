"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"

type Reputation = "like" | "dislike"


const Comment = ({comment}: any) => {
  
  const [fetchComment, setFetchComment] = useState<any>()

  const auth = useSession()
  const updatedComment = async (id: string, reputation: Reputation) => {
    const data = await fetch(`http://localhost:3000/api/comments?id=${id}&reputation=${reputation}`, {
      method: "GET",
      cache: "no-store"
    })
    
    return data.json()
}
  
  
  useEffect(() => {
    setFetchComment(comment)
  }, [])
  

  
  const name = auth.data?.user?.name
  
  const handleReputation = async (id: string, reputation: Reputation) => {
    if (auth.status === "authenticated") {
      var reputationStorage = localStorage.getItem(`reputation ${id} ${name}`) as string
  
      if (reputationStorage === null || reputationStorage !== reputation) {
        var data = await updatedComment(id, reputation)
        setFetchComment(data)
        localStorage.setItem(`reputation ${id} ${name}`, `${reputation}`)
      }
    }
  }
  
  return (
    <div className="bg-white p-2 max-w-[968px] mx-auto flex flex-col w-full">
        <div className="flex flex-row"> 
        <div className="name text-sm border-b-2 w-full">
            <span className="font-bold"> {name !== undefined ? name : null} </span> spune:
        </div>
        <div className="flex flex-row items-center gap-x-1">
            <p className="cursor-pointer font-bold mr-3"> {fetchComment?.reputation} </p>
            <AiOutlineLike className="cursor-pointer text-[2rem] w-full hover:text-emerald-400" onClick={() => handleReputation(fetchComment?.id, "like")}/>
            <AiOutlineDislike className="cursor-pointer text-[2rem] w-full hover:text-red-400" onClick={() => handleReputation(fetchComment?.id, "dislike")}/>
        </div>
        </div>
        <div className="">
            <p className="text-sm p-2"> {fetchComment?.desc} </p>
        </div>
    </div>
  )
}

export default Comment