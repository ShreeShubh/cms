import DomainAreas from '@/components/DomainAreas/DomainAreas'
import SocialBusinesses from '@/components/SocialBusinesses/SocialBusinesses'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="">
        <Image
          src="/socialBusinesses/banner.png"
          width={1366}
          height={340}
          className="w-full"
        />
      </div>

      <div className="bg-cms-secondary-green py-12">
        <div className="text-center mb-5">
          <h2 className="text-cms-primary-black text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry’s standard dummy
            text
          </h2>
        </div>

        <div className="">
          <SocialBusinesses />
        </div>
      </div>
    </>
  )
}

export default page
