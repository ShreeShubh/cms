import { keyInitiativesData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const KeyInitiatives = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      <div className="bg-cms-primary-green text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-16 py-10">
          <h1 className="text-3xl font-semibold mb-6">Key Initiatives</h1>
        </div>
      </div>
      <div className="flex-1 border-b">
        <ul className="flex flex-col gap-5 py-5 px-5 lg:px-16">
          {keyInitiativesData.map((item) => {
            return (
              <li key={item.id} className="flex flex-col gap-3">
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 text-[#404040] text-lg">
                  <p className="lg:w-1/12">{item.no}</p>
                  <div className="flex-1 space-y-5">
                    <p className="font-semibold">{item.title}</p>
                    <Image
                      src={item.imageUrl}
                      width={720}
                      height={400}
                      alt=""
                      className="w-full h-auto rounded"
                    />
                    <p>{item.desc}</p>
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
