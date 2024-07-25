import Header from "@/components/Header/Header"
import ImplementForScale from "@/components/ScaleAccelerators/ImplementForScale/ImplementForScale"
import OurOffers from "@/components/ScaleAccelerators/OurOffers/OurOffers"
import RapidFramework from "@/components/ScaleAccelerators/RapidFramework/RapidFramework"
import Tab from "@/components/Tab/Tab"
import { elementsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Introduction",
    link: "",
  },
  {
    id: 2,
    tab: "Why Worry About Implementation?",
    link: "",
  },
  {
    id: 3,
    tab: "RAPID Framework",
    link: "",
  },
  {
    id: 4,
    tab: "Elements of Successful Implementation",
    link: "",
  },
  {
    id: 5,
    tab: "Our Offerss",
    link: "",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/scaleAccelerators/implementForScale/banner.png')] bg-cover bg-center pt-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-32 mb-16">
          <h1 className="text-4xl font-semibold text-white ">
            Implement for Scale
          </h1>
        </div>
        <div className="max-w-screen-xl mx-auto flex items-end h-full">
          <div className="flex justify-center items-center">
            <Image
              src="/scaleAccelerators/implementForScale/logo.png"
              height={142}
              width={153}
              alt="logo"
            />
          </div>
        </div>
      </div>

      <Tab tabs={tabs} />

      <div className="flex flex-col items-center space-y-3 mt-14">
        <h2 className="text-3xl font-semibold text-cms-primary">
          Unlocking the Power of Effective Execution
        </h2>
        <div className="border-b-2 border-cms-primary-green w-20" />
      </div>

      <div className="max-w-screen-xl mx-auto mt-14 mb-8">
        <div className="space-y-4 text-cms-primary-black text-lg w-4/5">
          <p className="font-semibold">Introduction</p>
          <p>
            In today’s fast-paced and competitive business landscape, innovation
            and new ideas are constantly being generated. When it comes to
            implementing innovative ideas and interventions, achieving desirable
            outcomes can be a daunting task. However, simply coming up with a
            groundbreaking concept is not enough to ensure success. The true
            measure of an innovation lies in its implementation and its ability
            to deliver tangible results. Unfortunately, many well-designed
            projects fail when implemented at scale. This begs the question: why
            does such a gap exist between what we know and what we actually do?
            The answer lies in the complex nature of implementation and the
            contextual factors that influence it.In this article, we will
            explore the reasons behind implementation failures, the costs
            associated with such failures, and the key factors that contribute
            to successful implementation.
          </p>
        </div>
      </div>

      <ImplementForScale />

      <RapidFramework />

      <div className="bg-[#00AE8E] mt-5 mb-16">
        <div className="max-w-screen-xl mx-auto px-20 flex flex-col gap-5 items-center py-10">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white text-3xl font-semibold">
              Elements of Successful Implementation
            </h3>
            <div className="border-b border-cms-primary w-20" />
            <p className="text-lg text-white text-center w-10/12">
              Successful implementation requires a comprehensive approach that
              addresses various aspects of the process. The following elements
              play a crucial role in achieving desired results:
            </p>
          </div>
          <ul className="flex flex-col gap-5 text-white w-10/12 mt-5">
            {elementsData.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`${
                    elementsData.length !== item.id
                      ? "border-b border-dashed"
                      : ""
                  } pb-4`}
                >
                  <div className="flex items-center gap-5">
                    <Image
                      src={item.iconUrl}
                      width={100}
                      height={100}
                      alt=""
                      className={`${item.id % 2 === 0 ? "order-2" : "order-1"}`}
                    />
                    <div
                      className={`${
                        item.id % 2 === 0 ? "order-1" : "order-2"
                      } space-y-2`}
                    >
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="text-lg">{item.desc}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <OurOffers />
    </>
  )
}

export default page
