import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import SeeAlso from '@/components/SeeAlso'
import Comments from '@/components/Comments'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

type SearchParams = {
  params: {
    slug: string
  }
}

const getSinglePage = async (slug: string) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      method: "GET",
      cache: "no-store"
    })
    return res.json()
}

const SinglePage = async ({params}: SearchParams) => {
    
  const info = await getSinglePage(params.slug)
  
  const dataCreated = new Date(info.createdAt).toLocaleString()
  
  return (
    <> 
    <Navbar />
    <div className="bg-white flex flex-col max-w-[1080px] mx-auto p-4 mt-4">
      <div className="flex flex-col">
        <p className="text-gray-700 font-bold text-[2rem] mt-3"> {info.title} </p>
        <p className="text-gray-500 text-[0.9rem] text-right"> {dataCreated} </p>
        <p className="text-gray-500 text-[0.9rem] text-right mb-4"> Author: {info.user.name} </p>
      </div>
      <div className="image justify-center flex">
      <Image src={info.image ?? "/image.jpg"} alt="photo" width="800" height="400"/>
      </div>
      <div className="description mt-4">
        <p> {info.description} </p>
      </div>
    </div>
    {/* <SeeAlso /> */}
    <Comments comm={info.comments}/>
    <Footer />
    </>
  )
}

export default SinglePage