import {
  ethosData,
  weWorkData,
  weWorkImpactData,
  weWorkInitiativesData,
} from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const WeWork = () => {
  return (
    <div className="flex me-16">
      <div className="bg-cms-primary text-white ps-16 pe-10 py-10 w-[69%]">
        <h1 className="text-3xl font-semibold mb-6">
          How Do <br /> We Work?
        </h1>
      </div>
      <div className="">
        <div className="border-b">
          <ul className="flex flex-col list-disc justify-center h-full py-7 gap-5 ps-20 pe-16">
            {weWorkData.map((item) => {
              return (
                <li key={item.id}>
                  <p>{item.desc}</p>
                </li>
              )
            })}
            <h3 className="text-2xl text-[#1A1A1A]">
              To address the various levers of impact, we work with a <br />{' '}
              number of organisations like:
            </h3>
            <ul className="flex gap-3">
              {weWorkImpactData.map((item) => {
                return (
                  <li key={item.id} className="flex flex-col gap-3 w-[230px]">
                    <Image
                      src={item.imageUrl}
                      width={230}
                      height={140}
                      alt=""
                      className="w-full"
                    />
                    <p className="text-lg text-[#646464]">
                      <span
                        className="font-semibold"
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </span>{' '}
                      {item.desc}
                    </p>
                  </li>
                )
              })}
            </ul>
          </ul>
        </div>

        <div className="border-b">
          <div className="flex flex-col justify-center h-full pt-5 gap-5 ps-20 pe-16">
            <h3 className="text-2xl text-[#1A1A1A]">
              We implemented a number of important initiatives, including:
            </h3>
            <ul className="bg-cms-secondary-green flex flex-col gap-5 p-5">
              {weWorkInitiativesData.map((item) => {
                return (
                  <li key={item.id}>
                    <div className="flex flex-col gap-3">
                      <Image
                        src={item.imageUrl}
                        width={140}
                        height={78}
                        alt=""
                      />
                      <p>{item.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeWork
