import AlliancesAndPlatforms from "@/components/DomainAreas/Health/AlliancesAndPlatforms/AlliancesAndPlatforms"
import KeyDomain from "@/components/DomainAreas/Health/KeyDomain/KeyDomain"
import KeyInitiatives from "@/components/DomainAreas/Health/KeyInitiatives/KeyInitiatives"
import KeyInitiatives02 from "@/components/DomainAreas/Health/KeyInitiatives/KeyInitiatives02/KeyInitiatives02"

import Overview from "@/components/DomainAreas/Overview/Overview"
import Header from "@/components/Header/Header"
import Tab from "@/components/Tab/Tab"
import Image from "next/image"
import React from "react"

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
    "We have 25 years of experience as a global social impact consulting firm and use 360-degree approach that improves the well-being of vulnerable communities. CMS and its sister organisation, Swasti, a global south public health agency, partners with communities at the last mile to help them realise their potential through health and well-being. We work towards achieving Universal Health Care and Global Health Security through a Climate x Health centric approach and ensure our programs are climate-responsive."
  return (
    <>
      <div className="bg-[url('/domainAreas/health/banner.png')] h-[640px] bg-center bg-cover pt-5 pb-14">
        <Header />
        <div className="max-w-screen-xl mx-auto flex items-end h-full">
          <div className="flex justify-center items-center h-44 w-64 bg-white">
            <Image
              src="/domainAreas/health/logo.png"
              height={256}
              width={170}
              alt="logo"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <Tab tabs={tabs} />
      <Overview desc={overviewDesc} />
      <KeyDomain />
      <KeyInitiatives />
      <div className="bg-cms-secondary-green">
        <KeyInitiatives02 />
      </div>
      <AlliancesAndPlatforms />
    </>
  )
}

export default page
