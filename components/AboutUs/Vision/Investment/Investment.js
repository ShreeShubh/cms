import { investmentData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Investment = () => {
  return (
    <>
      <div className="my-16 flex flex-col gap-10">
        <h3 className="text-cms-primary text-3xl">
          An Investment Reimagined Approach
        </h3>
        <p className="text-[#4E4E4E] text-2xl">
          We like to see ourselves as solution-focused activists—‘Solvists’.
          Working closely with <br /> partners, we incubate and invest with a
          rare mix of resources, deep expertise, and <br /> on-ground
          experience, shaping social equity while working across SDG goals. We:
        </p>
        <ul className="flex gap-5">
          {investmentData.map((item) => {
            return (
              <li key={item.id} className="bg-cms-primary-green">
                <div className="flex flex-col gap-4 text-white py-7 px-5">
                  <Image src={item.iconUrl} width={65} height={65} alt="" />
                  <h4
                    className="text-2xl"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <div className="border border-cms-primary w-16" />
                  <p
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-10">
        <p className="text-center text-2xl text-[#1C1C1C]">
          The ‘Unlocking Value to Invest in Impact’ framework brings alive{' '}
          <br /> our living intelligence to enhance social equity.
        </p>
        <div className="w-full flex justify-center bg-cms-secondary-green border border-[#98D5C5] py-16 px-10 mb-16">
          <Image
            src="/aboutUs/vision/investment/banner.png"
            width={788}
            height={303}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Investment
