import Incubatees from '@/components/AboutUs/Incubatees/Incubatees'
import Tab from '@/components/AboutUs/Tab/Tab'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const desc =
    'Some of our incubated ideas have become full-fledged organisations, which operate as our sister organisations, but have grown to be significant development players in their own right.'
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

      <Tab heading="Incubatees" desc={desc} />

      <div>
        <div className="max-w-screen-xl mx-auto">
          <Incubatees />
        </div>
      </div>
    </>
  )
}

export default page
