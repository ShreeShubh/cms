import Tab from '@/components/DomainAreas/Livelihood/Tab/Tab'
import Overview from '@/components/DomainAreas/Overview/Overview'
import WorkforceWellbeing from '@/components/DomainAreas/WorkforceWellbeing/WorkforceWellbeing'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const overviewDesc =
    'Our Wellbeing for Workforce practise strives to make wellbeing a reality for the first mile workers and reach 100 million workers by 2030. We are committed to the Wellbeing of Workers, their families and communities.'
  return (
    <>
      <div className="bg-[url('/domainAreas/climate/banner.png')] bg-cover h-[600px]">
        <div className="max-w-screen-xl mx-auto flex items-end h-full">
          <div className="flex justify-center items-center h-44 w-64 bg-white">
            <Image
              src="/domainAreas/workforce/logo.png"
              height={256}
              width={170}
              alt="logo"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <Tab />
      <Overview desc={overviewDesc} />
      <WorkforceWellbeing />
    </>
  )
}

export default page
