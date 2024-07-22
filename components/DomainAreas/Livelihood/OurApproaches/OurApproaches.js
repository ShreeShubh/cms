import { ethosData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const OurApproaches = () => {
  return (
    <div className="flex mb-16 me-16">
      <div className="w-[488px]">
        <Image
          src="/domainAreas/livelihood/ourApp.png"
          height={780}
          width={400}
          alt=""
          className=""
        />
      </div>
      <div className="border-y">
        <ul className="flex flex-col justify-center h-full py-5 gap-5 ps-20 pe-16">
          {ethosData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex gap-3 items-center">
                  <Image src={item.iconUrl} width={76} height={76} alt="" />
                  <p>{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default OurApproaches
