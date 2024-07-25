import CollaborativeInitiatives from "@/components/CollaborativeInitiatives/CollaborativeInitiatives"
import Header from "@/components/Header/Header"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Community Action Collab",
    link: "",
  },
  {
    id: 2,
    tab: "Catalysing Social Impact (CSI)",
    link: "",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/collaborativeInitiatives/banner.png')] h-[480px] bg-center bg-cover py-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-32">
          <h1 className="text-5xl font-semibold text-white ">
            Collaborative Initiatives
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
          <CollaborativeInitiatives />
        </div>
      </div>
    </>
  )
}

export default page
