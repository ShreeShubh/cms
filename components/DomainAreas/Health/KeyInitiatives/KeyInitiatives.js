import { keyInitiativesData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const KeyInitiatives = () => {
  return (
    <div className="flex me-16">
      <div className="bg-cms-primary-green text-white">
        <div className="w-[400px]">
          <h1 className="text-3xl font-semibold mb-6 ps-16 pe-10 py-10">
            Key Initiatives
          </h1>
        </div>
      </div>
      <div className="border-b">
        <ul className="flex flex-col justify-center h-full py-5 gap-5 ps-20 pe-16">
          {keyInitiativesData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 text-[#404040] text-lg">
                    <p>{item.no}</p>
                    <div className="space-y-5">
                      <p>{item.title}</p>
                      <Image
                        src={item.imageUrl}
                        width={720}
                        height={400}
                        alt=""
                        className="w-full"
                      />
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default KeyInitiatives
