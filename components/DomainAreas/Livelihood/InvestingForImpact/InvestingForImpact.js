import { ethosData } from "@/utils/data"
import Image from "next/image"
import React from "react"
import Inclusive from "./Inclusive/Inclusive"

const InvestingForImpact = () => {
  return (
    <div className="flex me-16">
      <div className="bg-cms-primary text-white">
        <div className="w-[400px]">
          <h1 className="text-3xl font-semibold mb-6 ps-16 pe-10 py-10">
            Investing <br /> for Impact
          </h1>
        </div>
      </div>
      <div className="border-y">
        <div className="flex flex-col justify-center h-full py-5 gap-5 ps-20 pe-16">
          <h3 className="text-2xl text-[#1A1A1A]">
            We want to achieve impact at scale by co-investing with change
            agents to shape solutions and investments. Some of the work we have
            implemented in this regard is outlined below:
          </h3>
          <Inclusive />
        </div>
      </div>
    </div>
  )
}

export default InvestingForImpact
