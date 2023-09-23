import React, { ReactNode, createContext } from 'react'
import Post from './Post'
import Pagination from './Pagionation'

type WallProps = {
  page: number
  category?: string
}

export type PostWallProps = {
    _id: string;
    slug: string;
    title: string;
    description: string;
    img?: string | null;
    views: number;
    userName: string;
    createdAt: Date
  }  

const getPosts = async (page: number, category: string) => {
  if (category !== undefined) {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&category=${category}`, {
        method: "GET",
        cache: "no-cache"
    })
    if (!res.ok) {
      throw new Error(JSON.stringify(!res.ok))
    }
    
    return res.json()  
  }
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
      method: "GET",
      cache: "no-cache"
  })
  
  return res.json()
}

const Wall = async ({ page, category }: WallProps) => {
  const { posts, count } = await getPosts(page, category as string)
    
  return (
    <div className="flex flex-[5] flex-col gap-4 mt-4">
      {posts.map((post: PostWallProps, key: number) => {
        return (
        <div key={key}>
          <Post post={post}/>
        </div>
        ) 
      })}
      <Pagination page={page} count={count}/>
    </div>
    )
}

export default Wall