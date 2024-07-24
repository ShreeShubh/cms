import DomainAreas from "@/components/DomainAreas/DomainAreas"
import Header from "@/components/Header/Header"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Livelihood",
    link: "livelihood",
  },
  {
    id: 2,
    tab: "Health",
    link: "health",
  },
  {
    id: 3,
    tab: "Climate Change",
    link: "climateChange",
  },
  {
    id: 4,
    tab: "Workforce Wellbeing",
    link: "workforceWellbeing",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/domainAreas/banner.png')] h-[480px] w-full bg-center bg-cover py-5">
        <Header />
      </div>

      <div className="mb-20">
        <Tab tabs={tabs} />
      </div>

      <div className="text-center mb-5">
        <h2 className="text-cms-primary-black text-2xl">
          We have extensive experience in supporting - enterprises, vulnerable
          communities <br /> with healthcare and first mile workers with their
          wellbeing.
        </h2>
      </div>

      <div className="">
        <DomainAreas />
      </div>
    </>
  )
}

export default page
