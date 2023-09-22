import React from 'react'
import RecentPost from './RecentPost'

export type RecentPostsType = {
  title: string,
  createdAt: string,
  _id: string
}

const getRecentPosts = async () => {
  const res = await fetch("http://localhost:3000/api/recent")
  if (!res.ok) {
    throw new Error("res not ok")
  }
  
  return res.json()
}


const Recent = async () => {
  const recentPosts = await getRecentPosts() as RecentPostsType[]

  return (
    <div className="flex flex-col bg-white mt-4 rounded-sm">
    <> 
    <p className="text-center p-2 font-bold text-gray-500"> Recent posts </p>
    </>
    <> 
    { recentPosts.map((post: RecentPostsType) => {
      return (
      <div key={post._id}> 
        <RecentPost post={post}/>
      </div>
      )    
    })
    }
    </>
    </div>
    )
}

export default Recent