"use client"
import React from 'react'
import RecentPost from './RecentPost'

const Recent = () => {
  return (
    <div className="flex flex-col bg-white mt-4 rounded-sm">
    <> 
    <p className="text-center p-2 font-bold text-gray-500"> Recent posts </p>
    </>
    <RecentPost />
    <RecentPost />
    <RecentPost />
    <RecentPost />
    <RecentPost />
    <RecentPost />
    <RecentPost />
    <RecentPost />
    </div>
    )
}

export default Recent