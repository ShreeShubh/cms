import Header from "@/components/Header/Header"
import Tab from "@/components/Tab/Tab"
import { catalystData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "",
  },
  {
    id: 2,
    tab: "Following are the CLV objectives",
    link: "",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/socialBusinesses/catalyst/banner.png')] h-[640px] bg-center bg-cover py-5">
        <Header />
      </div>

      <Tab tabs={tabs} />

      <div className="max-w-screen-xl mx-auto px-5 my-16">
        <p className="text-lg text-[#1A1A1A]">
          The Farmers’ Producer Companies (FPCs) play a pivotal role in
          aggregating shareholder demand and products. However, the FPCs face
          significant challenges, such as poor quality of produce, unplanned
          growth of producer institutions, limited access to enterprise
          financing and inadequate support through agencies. These issues have
          impacted the overall reputation of FPCs, making it difficult for them
          to maintain strong buyer relations and ensure higher returns for
          farmers. As a result, the confidence of FPC shareholders in these
          institutions has diminished, leading to reduced engagement.
          Additionally, smallholder farmers often find themselves indebted to
          traders and are compelled to sell their produce at unfavourable
          margins. Moreover, they employ less-than-optimal production
          techniques, which further impacts their cost of production.
        </p>
      </div>

      <div className="flex w-full gap-3">
        <div className="w-full">
          <Image
            src="/socialBusinesses/catalyst/image01.png"
            width={675}
            height={420}
            alt=""
            className="w-full"
          />
        </div>
        <div className="bg-cms-primary text-white text-lg flex items-center px-16 w-full">
          <p>
            Catalyst Livelihood Ventures CLV Farm is an agri-marketing
            initiative that works with smallholder farmers to improve produce
            quality and procure their commodities, facilitated by the FPC. CLV
            sells these commodities to large buyers and brands at a premium
            generated through value-added activities, ensuring the farmers
            receive fair compensation for their risk and effort while generating
            adequate profits for CMS.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-20 flex flex-col gap-5 items-center py-16">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-cms-primary text-3xl font-semibold">
            Following are the CLV objectives
          </h3>
          <div className="border-b border-cms-primary-green w-20" />
        </div>
        <ul className="flex flex-col gap-5">
          {catalystData.map((item) => {
            return (
              <li
                key={item.id}
                className={`${
                  catalystData.length !== item.id
                    ? "border-b border-dashed"
                    : ""
                } pb-4`}
              >
                <div className="flex items-center gap-5">
                  <Image src={item.iconUrl} width={92} height={92} alt="" />
                  <p className="text-lg">{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 px-10 mb-16">
        <p className="text-center w-3/4 text-lg">
          CLV offers a comprehensive package of services, including market
          channel access, capital availability and capacity building for FPCs.
          The goal is to enable FPCs to handle higher business volumes and
          progress through the value chain, resulting in higher premiums for
          their produce.
        </p>
        <button className="px-7 py-3 bg-cms-primary text-white">
          Partner with us
        </button>
      </div>
    </>
  )
}

export default page
