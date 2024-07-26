import React from 'react'
import { esgTeam } from '../../utils/data'

export default function OurTeam() {
  return (
    <div className="grid lg:grid-cols-2 w-11/12 lg:py-12 mx-auto">
      <div className="flex flex-col justify-start items-center">
        <h2 className="text-[#622F88] lg:text-6xl sticky top-12 text-xl py-8 lg:py-0">
          Meet our
          <br className="hidden lg:block" /> Team
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8">
          {esgTeam.map((items, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <img src={items.profile} className="w-50 pb-8" alt={items.name} />
              <p className="text-[#7F3F97] lg:text-xl">{items.name}</p>
              <p className="lg:text-lg text-center h-[90px]">
                {items.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
