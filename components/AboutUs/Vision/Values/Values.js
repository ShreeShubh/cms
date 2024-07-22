import { missionData, valuesData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Values = () => {
  return (
    <div className="flex items-center gap-5 mb-16">
      <div className="w-1/2 relative">
        <Image
          src="/aboutUs/vision/valuesBanner.png"
          width={500}
          height={500}
          alt=""
          className="w-full"
        />
        <div className="flex flex-col left-0 gap-5 absolute top-0 p-16 ">
          <h1 className="text-white text-4xl">Values</h1>
          <div className="border border-white w-60" />
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-5">
        {valuesData.map((item) => {
          return (
            <li key={item.id} className="w-[260px] h-[224px] bg-cms-primary">
              <div className="flex flex-col gap-5 py-7 px-5">
                <Image src={item.iconUrl} width={50} height={50} alt="" />
                <p className="text-[#E5D9EA] text-lg">{item.desc}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Values
