import Partners from '@/components/AboutUs/Partners/Partners'
import Tab from '@/components/AboutUs/Tab/Tab'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const desc =
    'Over the last two decades, we have worked with a range of stakeholders, like CSOs, banks, corporate foundations, academic institutions, funding agencies, community organisations, multilateral and bilateral agencies, networks, governments, and non-profits.'
  return (
    <>
      <div className="mb-5">
        <Image
          src="/banner/banner01.png"
          width={1366}
          height={340}
          className="w-full"
        />
      </div>

      {/* <div className="text-center flex flex-col items-center gap-3 mb-10">
        <p className="text-cms-primary-black text-lg">About CMS</p>
        <h2 className="text-cms-primary-black text-2xl">
          We create an impact that is transformational, <br /> driving
          sustainable and scalable equity.
        </h2>
      </div> */}

      <Tab heading="Partners" desc={desc} />

      <div>
        <Partners />
      </div>
    </>
  )
}

export default page
