import React from 'react'

const Categories = () => {
  return (
    <div className="bg-white p-6 rounded-sm">
      <> 
      <p className="text-center font-semibold text-gray-500"> Categories </p>
      </>
      <div className="mt-4 flex w-full flex-row flex-wrap gap-1">
        <div className="badge cursor-pointer">default</div>
        <div className="badge badge-neutral cursor-pointer">neutral</div>
        <div className="badge badge-primary cursor-pointer">primary</div>
        <div className="badge badge-secondary cursor-pointer">secondary</div>
        <div className="badge badge-accent cursor-pointer"> accent</div>
        <div className="badge badge-ghost cursor-pointer">ghost</div>
      </div>
    </div>
  )
}

export default Categories