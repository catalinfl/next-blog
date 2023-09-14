import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import SeeAlso from '@/components/SeeAlso'
import Comments from '@/components/Comments'

const SinglePage = () => {

  return (
    <> 
    <Navbar />
    <div className="bg-white flex flex-col max-w-[1080px] mx-auto p-4 mt-4">
      <div className="flex flex-col">
        <p className="text-gray-700 font-bold text-[2rem] mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla. </p>
        <p className="text-gray-500 text-[0.9rem] text-right"> 05.12.2018 13:35:15 </p>
        <p className="text-gray-500 text-[0.9rem] text-right mb-4"> Author: Gogoasa </p>
      </div>
      <div className="image justify-center flex">
      <Image src="/image.jpg" alt="photo" width="800" height="400"/>
      </div>
      <div className="description mt-4">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti iure quos vitae similique reprehenderit harum mollitia numquam dignissimos! Repellendus dolore delectus odit sint modi tenetur deleniti, aut harum iste, non cumque, aliquam inventore at commodi sapiente distinctio. Distinctio impedit excepturi unde ullam aut saepe nam voluptate blanditiis optio culpa. </p>
      </div>
    </div>
    <SeeAlso />
    <Comments />
    <Footer />
    </>
  )
}

export default SinglePage