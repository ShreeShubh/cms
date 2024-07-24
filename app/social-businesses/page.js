import Header from "@/components/Header/Header"
import SocialBusinesses from "@/components/SocialBusinesses/SocialBusinesses"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Catalyst Livelihood Ventures",
    link: "",
  },
  {
    id: 2,
    tab: "G1",
    link: "",
  },
  {
    id: 3,
    tab: "Business Catalyst",
    link: "",
  },
  {
    id: 4,
    tab: "Shoonya",
    link: "",
  },
]

const page = () => {
  return (
    <>
      {/* <div className="">
        <Image
          src="/socialBusinesses/banner.png"
          width={1366}
          height={340}
          className="w-full"
        />
      </div> */}

      <div className="bg-[url('/socialBusinesses/banner.png')] h-[480px] bg-center bg-cover py-5">
        <Header />
      </div>

      <div className="mb-20">
        <Tab tabs={tabs} />
      </div>

      <div className="">
        <div className="text-center mb-5">
          <h2 className="text-cms-primary-black text-2xl">
            Many ideas incubated by our team have evolved into full-fledged
            organizations, <br /> each becoming a significant player in the
            development sector.
          </h2>
        </div>

        <div className="">
          <SocialBusinesses />
        </div>
      </div>
    </>
  )
}

export default page
