import { solutionsData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Solutions = () => {
  return (
    <div className="bg-[#E8E8E8] py-16">
      <ul className="max-w-screen-xl mx-auto flex justify-center">
        {solutionsData.map((item) => {
          const dataLength = solutionsData.length
          return (
            <li
              key={item.id}
              className={
                dataLength !== item.id
                  ? 'border-r border-dashed border-cms-primary-gray'
                  : ''
              }
            >
              <div className="flex flex-col items-center gap-3 w-[400px] px-7">
                <Image
                  src={item.logoUrl}
                  width={60}
                  height={60}
                  alt={item.title}
                />
                <h3 className="text-[#1A1A1A] text-2xl font-semibold]">
                  {item.title}
                </h3>
                <p className="text-lg text-[#4E4E4E] text-center">
                  {item.desc}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Solutions
