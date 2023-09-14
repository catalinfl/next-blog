import React from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"

const Comment = () => {
  return (
    <div className="bg-white p-2 max-w-[968px] mx-auto flex flex-col w-full">
        <div className="flex flex-row"> 
        <div className="name text-sm border-b-2 w-full">
            <span className="font-bold"> rasistul89 </span> spune:
        </div>
        <div className="flex flex-row items-center gap-x-1">
            <p className="cursor-pointer font-bold mr-3"> +1 </p>
            <AiOutlineLike className="cursor-pointer text-[2rem] w-full hover:text-emerald-400" />
            <AiOutlineDislike className="cursor-pointer text-[2rem] w-full hover:text-red-400"/>
        </div>
        </div>
        <div className="">
            <p className="text-sm p-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At non esse unde accusantium sequi earum delectus provident quae, assumenda eum fugiat ratione optio beatae. Ipsa tempore aspernatur molestiae, voluptatum totam illum vel tenetur aliquam laborum esse nesciunt atque delectus deleniti itaque excepturi omnis dicta aliquid reiciendis odit eligendi facilis quas. </p>
        </div>
    </div>
  )
}

export default Comment