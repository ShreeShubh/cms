import {
  collaborativeInitiativesData,
  scaleAcceleratorsData,
} from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const ScaleAccelerators = () => {
  return (
    <ul className="flex flex-col gap-16 my-14">
      {scaleAcceleratorsData.map((item) => {
        return (
          <li key={item.id} id={item.link}>
            <div
              className={`flex justify-between items-center w-11/12 ${
                item.id % 2 === 0 ? "ms-auto" : ""
              }`}
            >
              <div className={`${item.id % 2 === 0 ? "order-1" : ""}`}>
                <div className="">
                  <Image src={item.imageUrl} height={400} width={600} alt="" />
                  {/* <div
                    className={`absolute ${
                      item.id % 2 === 0 ? '-left-16' : '-right-16'
                    } top-1/2 bottom-1/2 flex justify-center items-center shadow bg-white`}
                  >
                    <Image src={item.logoUrl} width={125} height={30} alt="" />
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col items-start gap-5 w-[500px]">
                <h2 className="text-3xl text-cms-primary font-semibold">
                  {item.title}
                </h2>
                <p className="text-lg text-[#646464]">{item.desc}</p>
                <Link href={item.path}>
                  <button className="border bg-cms-primary text-white text-lg rounded px-6 py-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ScaleAccelerators
