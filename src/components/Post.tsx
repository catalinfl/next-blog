import React from 'react'
import Image from 'next/image'
import { PostWallProps } from './Wall'
import Link from 'next/dist/client/link'


type PostType = {
  post: PostWallProps
}

const Post = ({ post }: PostType) => {

  const formatData = new Date(post.createdAt).toLocaleString()

  return (
    <div className="bg-white p-4 flex-col cursor-pointer">
      <Link href={'/posts/' + post.slug}> 
        <div className="flex flex-col">
            <p className="font-bold text-gray-600 pl-4 text-[1.5rem] cursor-pointer"> 
                {post.title}
             </p>
             <p className="text-gray-300 text-right text-[0.85rem] mt-2"> Author: {post.userName} </p>
             <p className="text-gray-300 text-right text-[0.85rem]"> {formatData} </p>
            <div className="flex justify-center p-4"> 
            <Image src={post.img ?? "/image.jpg"} className="cursor-pointer" alt="wall image" style={{objectFit: 'contain'}} width="700" height="400"/>
            </div>
            <div className="mt-1 px-4 cursor-pointer">
              <p> {post.description} </p>
            </div>
        </div>
      </Link>
    </div>
    )
}

export default Post