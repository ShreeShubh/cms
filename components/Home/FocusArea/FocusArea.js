import { focusAreaData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const FocusArea = () => {
  return (
    <div className="bg-[url('/home/focusArea/focusAreaBg.png')] bg-cover bg-center w-full h-[800px]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-4 py-10">
        <h3 className="text-5xl text-cms-primary">Focus Areas</h3>
        <div className="border-b border-cms-primary-green w-8" />
        <p className="text-center text-lg text-[#1A1A1A]">
          We are dedicated to making a meaningful impact on the world by
          applying our expertise across <br /> critical domains: Health,
          Wellbeing for the Workforce, Climate, and Livelihood.
        </p>

        <ul className="flex justify-center gap-5 mt-10">
          {focusAreaData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex flex-col items-center gap-3 w-[320px] h-full">
                  <div className="relative group">
                    <Image
                      src={item.imageUrl}
                      width={220}
                      height={220}
                      alt={item.title}
                      className="flex-shrink-0"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src={item.hoverUrl}
                        width={220}
                        height={220}
                        alt={item.title}
                        className="flex-shrink-0"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center flex-grow w-full">
                    <h5 className="text-2xl text-cms-primary font-semibold">
                      {item.title}
                    </h5>
                    <p className="text-lg text-[#171717] text-center">
                      {item.desc}
                    </p>
                  </div>
                  <Link href={item.link}>
                    <button className="px-4 py-2 bg-cms-primary text-white">
                      Know more
                    </button>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default FocusArea
