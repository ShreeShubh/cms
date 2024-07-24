import Ethos from "@/components/DomainAreas/Livelihood/Ethos/Ethos"
import OurApproaches from "@/components/DomainAreas/Livelihood/OurApproaches/OurApproaches"
import Overview from "@/components/DomainAreas/Overview/Overview"
import WeWork from "@/components/DomainAreas/Livelihood/WeWork/WeWork"
import Image from "next/image"
import React from "react"
import Tab from "@/components/Tab/Tab"
import Header from "@/components/Header/Header"

export const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "overview",
  },
  {
    id: 2,
    tab: "Our Beliefs",
    link: "ourBeliefs",
  },
  {
    id: 3,
    tab: "Our Approaches",
    link: "ourApproaches",
  },
  {
    id: 4,
    tab: "How Do We Work?",
    link: "howDoWeWork",
  },
  {
    id: 5,
    tab: "Investing for Impact",
    link: "investingForImpact",
  },
  {
    id: 6,
    tab: "Related Resources",
    link: "relatedResources",
  },
]

const page = () => {
  const overviewDesc =
    "We work with vulnerable people who operate as small producers (farms, forests, allied industries, fisheries and MSMEs) to enhance their livelihoods. Our overall objective is to promote wealthy, resilient and responsible small producers at a national scale through inclusive entrepreneurship. Our approach to build wealth for small producers focuses on having effective market engagement and co-creating business solutions that benefit both businesses and small producers."
  return (
    <>
      <div className="bg-[url('/domainAreas/livelihood/banner.png')] h-[640px] bg-cover bg-center pt-5 pb-14">
        <Header />
        <div className="max-w-screen-xl mx-auto flex items-end h-full">
          <div className="flex justify-center items-center h-44 w-64 bg-white">
            <Image
              src="/domainAreas/livelihood/logo.png"
              height={142}
              width={153}
              alt="logo"
            />
          </div>
        </div>
      </div>

      <Tab tabs={tabs} />
      <Overview desc={overviewDesc} />
      <Ethos />
      <OurApproaches />
      <WeWork />
      <div className="w-full">
        <Image
          src="/domainAreas/livelihood/banner02.png"
          width={1366}
          height={360}
          alt="banner"
          className="w-full"
        />
      </div>
    </>
  )
}

export default page
