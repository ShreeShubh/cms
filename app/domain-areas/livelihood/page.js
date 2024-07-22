import Ethos from '@/components/DomainAreas/Livelihood/Ethos/Ethos'
import OurApproaches from '@/components/DomainAreas/Livelihood/OurApproaches/OurApproaches'
import Overview from '@/components/DomainAreas/Livelihood/Overview/Overview'
import Tab from '@/components/DomainAreas/Livelihood/Tab/Tab'
import Image from 'next/image'
import React from 'react'

const page = () => {
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
      <Overview />
      <Ethos />
      <OurApproaches />
    </>
  )
}

export default page
