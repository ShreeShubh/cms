import Mission from '@/components/AboutUs/Mission/Mission'
import Tab from '@/components/AboutUs/Tab/Tab'
import Investment from '@/components/AboutUs/Vision/Investment/Investment'
import Values from '@/components/AboutUs/Vision/Values/Values'
import Vision from '@/components/AboutUs/Vision/Vision'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const desc =
    'A future where holistic and well-orchestrated partnerships and investments create an impact that is transformational, driving sustainable and scalable equity.'
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
        <h3 className="text-cms-primary-black text-lg">About CMS</h3>
        <h2 className="text-cms-primary-black text-3xl">
          We create an impact that is transformational, <br /> driving
          sustainable and scalable equity.
        </h2>
      </div> */}

      <Tab heading="Vision" desc={desc} />

      <div className="my-16">
        <div className="max-w-screen-xl mx-auto">
          <Vision />
        </div>
        <Mission />
      </div>

      <div className="max-w-screen-xl mx-auto">
        <Investment />
      </div>

      <div>
        <Values />
      </div>

      <div className="mb-16">
        <div className="max-w-screen-xl mx-auto flex justify-between my-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#171717] text-3xl">Working with CMS</h1>
            <div className="border border-cms-secondary-green w-80" />
          </div>
          <div className="w-1/2">
            <p className="text-[#4E4E4E] text-2xl">
              Our on-ground experience and understanding help us partner with
              multi-disciplinary teams to tackle complex challenges and maximise
              social returns.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mt-16 mx-auto">
          <div className="flex flex-col gap-10 py-12 w-full border border-cms-primary">
            <h2 className="text-cms-primary text-3xl text-center">
              We are committed to forging transformative partnerships <br /> to
              invest in equity.
            </h2>
            <p className="text-lg text-[#4E4E4E] text-center">
              Established in 1994, CMS, based in India, works in 25 other
              countries, exporting India’s social development <br /> capacities
              and bringing back learning and goodwill. We are part of the
              Catalyst Group.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
