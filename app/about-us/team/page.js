import Tab from "@/components/AboutUs/Tab/Tab"
import Team from "@/components/AboutUs/Team/Team"
import Header from "@/components/Header/Header"
import Image from "next/image"
import React from "react"

const page = () => {
  const desc =
    "Our team consists of dedicated mentors, impact specialists, and business experts. Meet the dedicated team at CMS, blending deep industry knowledge with a relentless pursuit of positive social change."
  return (
    <>
      <div className="bg-[url('/banner/banner02.png')] h-[480px] w-full bg-center bg-cover py-5">
        <Header />
      </div>

      {/* <div className="text-center flex flex-col items-center gap-3 mb-10">
        <p className="text-cms-primary-black text-lg">About CMS</p>
        <h2 className="text-cms-primary-black text-2xl">
          We create an impact that is transformational, <br /> driving
          sustainable and scalable equity.
        </h2>
      </div> */}

      <Tab heading="Team" desc={desc} />

      <div>
        <div className="max-w-screen-xl mx-auto">
          <Team />
        </div>
      </div>
    </>
  )
}

export default page
