import React from 'react'
import Image from 'next/image'

const Post = () => {


  return (
    <div className="bg-white p-4 flex-col">
        <div className="flex flex-col">
            <p className="font-bold text-gray-600 pl-4 text-[1.5rem] cursor-pointer"> 
                Lorem ipsum dolor sit amet consectetur adipisicing.
             </p>
             <p className="text-gray-300 text-right text-[0.85rem] mt-2"> Author: Camarad Gogoasa </p>
             <p className="text-gray-300 text-right text-[0.85rem]"> 05.03.2018 13:15:13 </p>
            <div className="flex justify-center p-4"> 
            <Image src="/image.jpg" className="cursor-pointer" alt="wall image" width="700" height="400"/>
            </div>
            <div className="mt-3 px-4 cursor-pointer">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis necessitatibus magnam provident architecto aut voluptatem expedita, sunt optio? Sed, soluta? Aut quidem accusantium tempora at dolorum cum similique dolore. Animi nulla repellendus, vel, perspiciatis unde veniam culpa praesentium rerum officia voluptate provident distinctio blanditiis, quo magnam eligendi quas mollitia?... </p>
            </div>
        </div>
    </div>
    )
}

export default Post