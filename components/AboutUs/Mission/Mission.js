import { missionData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Mission = () => {
  return (
    <div className="flex">
      <div className="bg-[#7F3F98]">
        <ul className="flex flex-col gap-5 py-16 ps-16 pe-5">
          {missionData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex items-center gap-3">
                  <div className="h-[76px] w-[76px]">
                    <Image
                      src={item.iconUrl}
                      height={76}
                      width={76}
                      alt=""
                      className="w-[76px] h-[76px]"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h2>
                    <p
                      className="text-white text-lg mt-3"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="w-[52%] relative">
        <Image
          src="/aboutUs/vision/missionBanner.png"
          width={683}
          height={500}
          alt=""
          className="w-full"
        />
        <div className="flex flex-col right-0 gap-5 absolute top-0 p-16 ">
          <h1 className="text-white text-right text-4xl font-semibold">
            Mission
          </h1>
          <div className="border border-white w-60" />
        </div>
      </div>
    </div>
  )
}

export default Mission
