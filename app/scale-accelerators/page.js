import Header from "@/components/Header/Header"
import ScaleAccelerators from "@/components/ScaleAccelerators/ScaleAccelerators"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Design for Success",
    link: "designForSuccess",
  },
  {
    id: 2,
    tab: "Evidence for Change",
    link: "evidenceForChange",
  },
  {
    id: 3,
    tab: "Implement for Scale",
    link: "implementForScale",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/scaleAccelerators/banner.png')] h-[480px] bg-center bg-cover py-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-32">
          <h1 className="text-5xl font-semibold text-white ">
            Scale Accelerators
          </h1>
        </div>
      </div>

      <div className="mb-20">
        <Tab tabs={tabs} />
      </div>

      <div className="">
        <div className="text-center mb-5">
          <h2 className="text-cms-primary-black text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum <br /> has been the industry’s standard dummy
            text
          </h2>
        </div>

        <div className="">
          <ScaleAccelerators />
        </div>
      </div>
    </>
  )
}

export default page
