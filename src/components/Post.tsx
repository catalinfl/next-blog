import React from 'react'
import Image from 'next/image'
import { PostWallProps } from './Wall'


type PostType = {
  post: PostWallProps
}

const Post = ({post}: PostType) => {


  return (
    <div className="bg-white p-4 flex-col">
        <div className="flex flex-col">
            <p className="font-bold text-gray-600 pl-4 text-[1.5rem] cursor-pointer"> 
                {post.title}
             </p>
             <p className="text-gray-300 text-right text-[0.85rem] mt-2"> Author: {post.user.name} </p>
             <p className="text-gray-300 text-right text-[0.85rem]"> 05.03.2018 13:15:13 </p>
            <div className="flex justify-center p-4"> 
            <Image src={post.img ?? "/image.jpg"} className="cursor-pointer" alt="wall image" width="700" height="400"/>
            </div>
            <div className="mt-1 px-4 cursor-pointer">
              <p> {post.description} </p>
            </div>
        </div>
    </div>
    )
}

export default Post