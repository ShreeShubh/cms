import { homePartnersData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16">
      <h2 className="text-ce-brown text-3xl">Partners</h2>
      <div className="border-b border-cms-primary-green w-8" />
      <div className="flex justify-center mt-5">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3">
          {homePartnersData.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <Image src={item.imageUrl} width={150} height={60} alt="" />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Partners
