import { catalystGroupData, ethosData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const CatalystGroup = () => {
  return (
    <div className="flex mt-10 me-16">
      <div className="bg-cms-primary text-white">
        <div className="w-[400px]">
          <h1 className="text-3xl font-semibold mb-6 ps-16 pe-10 py-10">
            Why Catalyst <br /> Group and what <br /> is Unique about <br /> us?
          </h1>
        </div>
      </div>
      <div className="border-y">
        <ul className="flex flex-col justify-center h-full py-5 gap-5 ps-20 pe-16">
          {catalystGroupData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 text-cms-primary text-2xl">
                    <p>{item.no}</p>
                    <p>{item.title}</p>
                  </div>
                  <p className="text-lg text-[#404040] ps-10">{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default CatalystGroup
