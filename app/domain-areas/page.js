import DomainAreas from '@/components/DomainAreas/DomainAreas'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="mb-12">
        <Image
          src="/domainAreas/banner.png"
          width={1366}
          height={340}
          className="w-full"
        />
      </div>

      <div className="text-center mb-5">
        <h2 className="text-cms-primary-black text-2xl">
          We have extensive experience in supporting - enterprises, vulnerable
          communities <br /> with healthcare and first mile workers with their
          wellbeing.
        </h2>
      </div>

      <div className="">
        <DomainAreas />
      </div>
    </>
  )
}

export default page
