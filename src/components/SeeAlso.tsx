import React from 'react'
import Image from 'next/image'

const SeeAlso = () => {
  return (
    <div className="bg-primary w-full max-w-[1080px] mx-auto mt-4 p-4">
        <div className="flex mb-2">
            <p className="text-gray-300 text-sm">Recomanded articles</p>
        </div>
        <div className="flex justify-center w-full h-full"> 
        <div className="flex flex-row flex-wrap gap-3 p-2 justify-center md:justify-start">
        <div className="flex flex-col bg-white p-2 max-w-[230px] h-[350px]">
            <div className="flex justify-center">
            <Image src="/image.jpg" width="300" height="250" alt="recommandedImg" />
            </div>
            <div className="flex flex-col">
            <p className="text-[0.7rem] text-right text-gray-500"> Date: 17.12.2018 </p>
            <p className="text-gray-700 font-bold text-sm mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis dolore repudiandae perferendis natus mollitia corporis fugit facere perspiciatis ut omnis voluptatibus, dolores alias incidunt </p>
            </div>
        </div>
        <div className="flex flex-col bg-white p-2 w-full max-w-[230px] h-[350px]">
            <div className="flex justify-center">
            <Image src="/image.jpg" width="230" height="250" alt="recommandedImg" />
            </div>
            <div className="flex flex-col w-full h-[100%]">
            <p className="text-[0.7rem] text-right text-gray-500"> Date: 17.12.2018 </p>
            <p className="text-gray-700 font-bold text-sm mb-4"> pedicabo </p>
            </div>
        </div>
        <div className="flex flex-col bg-white p-2 max-w-[230px] h-[350px]">
            <div className="flex justify-center">
            <Image src="/image.jpg" width="300" height="250" alt="recommandedImg" />
            </div>
            <div className="flex flex-col">
            <p className="text-[0.7rem] text-right text-gray-500"> Date: 17.12.2018 </p>
            <p className="text-gray-700 font-bold text-sm mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis dolore repudiandae perferendis natus mollitia corporis fugit facere perspiciatis ut omnis voluptatibus, dolores alias incidunt </p>
            </div>
        </div>
        <div className="flex flex-col bg-white p-2 max-w-[230px] h-[350px]">
            <div className="flex justify-center">
            <Image src="/image.jpg" width="300" height="250" alt="recommandedImg" />
            </div>
            <div className="flex flex-col">
            <p className="text-[0.7rem] text-right text-gray-500"> Date: 17.12.2018 </p>
            <p className="text-gray-700 font-bold text-sm mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis dolore repudiandae perferendis natus mollitia corporis fugit facere perspiciatis ut omnis voluptatibus, dolores alias incidunt </p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default SeeAlso