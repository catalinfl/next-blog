import React from 'react'
import { RecentPostsType } from './Recent'

type RecentProps = {
    post: RecentPostsType
}

const RecentPost = ({post}: RecentProps) => {
    
    const recentData = new Date(post.createdAt).toLocaleString()

  return (
    <div className="bg-white p-4 flex w-full border">
        <div className="flex flex-col w-full">
            <p className="font-medium text-gray-600 justify-left flex text-[1rem]"> 
                {post.title}
             </p>
             <p className="text-gray-300 text-right mt-4 text-[0.75rem]"> {recentData} </p>
        </div>
    </div>
    )
}

export default RecentPost