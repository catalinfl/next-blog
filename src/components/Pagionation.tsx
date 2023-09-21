"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const Pagination = ({ page }: {page: number} ) => {
    
    
    const router = useRouter()
    
    console.log(page)
    
    return (
      <div className="flex justify-center">
      <div className="join justify-center my-3 flex flex-row bg-white">
        <button className="join-item btn bg-primary hover:text-white" onClick={() => {
            if (page > 1) {
              router.push(`?page=${page-1}`)
            }
        }
        }>Previous</button>
        <button className="join-item btn bg-primary hover:text-white">{page}</button>
        <button className="join-item btn bg-primary hover:text-white" onClick={() => {
            router.push(`?page=${page+1}`)        
        }}>Next</button>
      </div>
      </div>
    )
  }
  
export default Pagination