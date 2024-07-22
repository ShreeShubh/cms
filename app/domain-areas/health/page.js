import KeyDomain from '@/components/DomainAreas/Health/KeyDomain/KeyDomain'
import Tab from '@/components/DomainAreas/Livelihood/Tab/Tab'
import Overview from '@/components/DomainAreas/Overview/Overview'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const overviewDesc =
    'We have 25 years of experience as a global social impact consulting firm and use 360-degree approach that improves the well-being of vulnerable communities. CMS and its sister organisation, Swasti, a global south public health agency, partners with communities at the last mile to help them realise their potential through health and well-being. We work towards achieving Universal Health Care and Global Health Security through a Climate x Health centric approach and ensure our programs are climate-responsive.'
  return (
    <>
      <div className="bg-[url('/domainAreas/climate/banner.png')] bg-cover h-[600px]">
        <div className="max-w-screen-xl mx-auto flex items-end h-full">
          <div className="flex justify-center items-center h-44 w-64 bg-white">
            <Image
              src="/domainAreas/climate/logo.png"
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
      <KeyDomain />
    </>
  )
}

export default page
