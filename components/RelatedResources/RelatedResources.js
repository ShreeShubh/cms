import { relatedResourcesData } from "@/utils/data"
import { leftArrow, rightArrow } from "@/utils/icon"
import Image from "next/image"
import React from "react"

const RelatedResources = () => {
  return (
    <div className="bg-[#00AE8E]">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-3xl font-semibold">
            Related Resources
          </h3>
          <div className="flex gap-3 text-xl text-white">
            <span>{leftArrow}</span>
            <span>{rightArrow}</span>
          </div>
        </div>

        <ul className="flex gap-5 mt-10">
          {relatedResourcesData.map((item) => {
            return (
              <li key={item.id}>
                <div className="w-[352px] flex flex-col gap-3 text-white text-lg min-h-[500px]">
                  <Image src={item.imageUrl} width={352} height={200} alt="" />
                  <p>{item.tag}</p>
                  <hr className="border-white" />
                  <p className="font-semibold">{item.title}</p>
                  <p className="flex-grow">{item.desc}</p>
                  <button className="px-6 py-2 bg-transparent border border-white rounded self-start">
                    Know more
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default RelatedResources
