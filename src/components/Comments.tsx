import React from 'react'
import Comment from './Comment'


const Comments = ({comm}: any) => {

  return (
    <div className="bg-primary mx-auto max-w-[1080px] mt-4 border-white p-2 border gap-y-1 flex flex-col">
        <div className="flex max-w-[968px] w-full mx-auto">
            <p className="text-left text-lg text-white font-bold "> {comm.length} {comm.length > 1 ? `comments` : `comment` } are available at this article </p>
        </div>
        <div className="p-2 max-w-[968px] mx-auto flex gap-2 flex-col w-full">
            {comm.map((comment: any) => {
                return (
                    <div key={comment._id}>
                        <Comment comment={comment} />
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default Comments