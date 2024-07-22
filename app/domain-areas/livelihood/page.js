import Ethos from '@/components/DomainAreas/Livelihood/Ethos/Ethos'
import ImportantInitiatives from '@/components/DomainAreas/Livelihood/ImportantInitiatives/ImportantInitiatives'
import OurApproaches from '@/components/DomainAreas/Livelihood/OurApproaches/OurApproaches'
import Overview from '@/components/DomainAreas/Overview/Overview'
import Tab from '@/components/DomainAreas/Livelihood/Tab/Tab'
import WeWork from '@/components/DomainAreas/Livelihood/WeWork/WeWork'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const overviewDesc =
    'We work with vulnerable people who operate as small producers (farms, forests, allied industries, fisheries and MSMEs) to enhance their livelihoods. Our overall objective is to promote wealthy, resilient and responsible small producers at a national scale through inclusive entrepreneurship. Our approach to build wealth for small producers focuses on having effective market engagement and co-creating business solutions that benefit both businesses and small producers.'
  return (
    <>
      <div className="bg-[url('/domainAreas/livelihood/banner.png')] bg-cover h-[600px]">
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

      <Tab />
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
