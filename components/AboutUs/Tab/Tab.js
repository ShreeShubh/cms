"use client"

import { tabs } from "@/utils/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Tab = ({ heading, desc }) => {
  const pathname = usePathname()

  return (
    <>
      <div className="text-center mt-10 mb-5">
        <p className="text-cms-secondary-black text-lg">About Us</p>
      </div>
      <ul className="max-w-screen-xl mx-auto w-full flex justify-center items-center gap-5 mb-10 text-cms-secondary-black text-lg">
        {tabs.map((item) => {
          const isActive = pathname.includes(item.url)
          return (
            <li key={item.id}>
              <Link href={item.url}>
                <button
                  className={`py-3 px-6 ${
                    isActive
                      ? "bg-cms-primary-green text-white"
                      : "bg-cms-secondary-green text-[#404040]"
                  }`}
                >
                  {item.tab}
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
      <div>
        <div className="max-w-screen-xl mx-auto flex justify-between my-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#171717] text-4xl font-semibold">{heading}</h1>
            <div className="border border-[#707070] w-60" />
          </div>
          <div className="w-1/2">
            <p className="text-[#4E4E4E] text-2xl">{desc}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tab
