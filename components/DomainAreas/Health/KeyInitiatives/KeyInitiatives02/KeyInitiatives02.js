import { keyInitiatives02Data } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const KeyInitiatives02 = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <ul className="flex flex-col gap-5 px-5 py-10">
        {keyInitiatives02Data.map((item) => {
          return (
            <li
              key={item.id}
              className="border-b border-dashed border-cms-primary-green py-5"
            >
              <div className="flex gap-3">
                <Image src={item.logoUrl} width={100} height={100} alt="" />
                <p className="text-lg text-[#1A1A1A]">{item.no}</p>
                <p className="text-lg text-[#1A1A1A]">{item.title}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default KeyInitiatives02
