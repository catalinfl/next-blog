import React from 'react'

const Categories = () => {
  return (
    <div className="bg-white p-6 rounded-sm">
      <> 
      <p className="text-center font-semibold text-gray-500"> Categories </p>
      </>
      <div className="mt-4 flex flex-row flex-wrap gap-2">
        <div className="badge cursor-pointer">default</div>
        <div className="badge badge-neutral cursor-pointer">neutral</div>
        <div className="badge badge-primary">primary</div>
        <div className="badge badge-secondary">secondary</div>
        <div className="badge badge-accent"> accent</div>
        <div className="badge badge-ghost">ghost</div>
      </div>
    </div>
  )
}

export default Categories