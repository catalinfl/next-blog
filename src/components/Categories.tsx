import Link from 'next/link';
import React from 'react'

type Category = {
  id: string,
  slug: string,
  name: string,
  img: string,
  colour: string,
  posts?: any[]
}


const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/category", {
      cache: "no-cache",
      method: "GET"      
  });
  
  if (!res.ok) {
    throw new Error(JSON.stringify(!res.ok))
  }
  
  return res.json()
}

const Categories = async () => {
  const categories = await getCategories()
  return (
    <div className="bg-white p-6 rounded-sm">
      <> 
      <p className="text-center font-semibold text-gray-500"> Categories </p>
      </>
      <div className="mt-4 flex w-full flex-row flex-wrap gap-1">
        <>
        {categories?.map((category: Category) => {
          return ( 
            <button className={`badge badge-${category.colour} cursor-pointer`} key={category.id}> {category.name} </button>
          )
        }  
          )
        }
        </>
      </div>
    </div>
  )
}

export default Categories