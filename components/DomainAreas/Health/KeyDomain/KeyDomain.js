import { ethosData, keyDomainData, valuesData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const KeyDomain = () => {
  return (
    <div className="flex mt-10 me-16">
      <div className="bg-cms-primary text-white">
        <div className="w-[400px]">
          <h1 className="text-3xl font-semibold mb-6 ps-16 pe-10 py-10">
            Key Domains <br /> We Work In
          </h1>
        </div>
      </div>
      <div className="border-y py-5">
        <ul className="grid grid-cols-2 ps-20 gap-5">
          {keyDomainData.map((item) => {
            return (
              <li key={item.id} className="w-[352px]">
                <div className="flex flex-col gap-2">
                  <Image
                    src={item.imageUrl}
                    width={352}
                    height={160}
                    alt=""
                    className="w-full"
                  />
                  <h3 className="text-lg text-cms-primary font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[#404040]">{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <p className="ps-20 py-5 w-10/12">
          Other priority domains include Mental Health, Social Determinants of
          Health, Inclusive health systems for special populations, and
          Innovative Financing & Health Entrepreneurship
        </p>
        <p className="ps-20 pb-5 w-10/12">
          In 2022-23 alone, Health Practice reached and enriched the health of
          26.44 million people and supported over 85+ partners.
        </p>

        <div className="bg-cms-secondary ms-20 p-5">
          <h4 className="text-lg font-semibold mb-3 text-cms-primary">
            The Practice Works with Various Partner Types:
          </h4>
          <p className="text-[#1A1A1A]">
            Local to National Governments, Regional Government bodies, UN
            Agencies, Bilateral <br /> and Multilateral Agencies, Large Civil
            Society Networks representing the cause of <br /> vulnerable
            populations
          </p>
        </div>
      </div>
    </div>
  )
}

export default KeyDomain
