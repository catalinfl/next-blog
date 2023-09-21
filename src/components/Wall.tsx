import React, { createContext } from 'react'
import Post from './Post'
import Pagination from './Pagionation'

type WallProps = {
  page: number
}

export type PostWallProps = {
    _id: string;
    slug: string;
    title: string;
    description: string;
    img?: string | null;
    views: number;
    user: string;
  }  

const getPosts = async (page: number) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
        method: "GET",
        cache: "no-cache"
    })
    if (!res.ok) {
      throw new Error(JSON.stringify(!res.ok))
    }
    
    return res.json()

}



const Wall = async ({ page }: WallProps) => {

  

  const posts = await getPosts(page)
  
  console.log(posts)
  
  return (
    <div className="flex flex-[5] flex-col gap-4 mt-4">
      {posts.map((post: PostWallProps, key: number) => {
        return (
        <div key={key}>
          <Post post={post}/>
        </div>
        ) 
      })}
      <Pagination page={page}/>
    </div>
    )
}

export default Wall