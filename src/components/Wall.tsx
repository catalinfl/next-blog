import React from 'react'
import Post from './Post'

const Wall = () => {
  return (
    <div className="flex flex-[5] flex-col gap-4 mt-4">
      <Post />
      <Post />
      <div className="flex justify-center">
      <div className="join justify-center my-3 flex flex-row bg-white">
        <button className="join-item btn bg-primary hover:text-white">1</button>
        <button className="join-item btn bg-primary hover:text-white">2</button>
        <button className="join-item btn bg-primary hover:text-white">3</button>
        <button className="join-item btn bg-white hover:text-white">...</button>
      </div>
      </div>
    </div>
    )
}

export default Wall