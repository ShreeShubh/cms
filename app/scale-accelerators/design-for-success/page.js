import Header from "@/components/Header/Header"
import ScaleAccelerators from "@/components/ScaleAccelerators/ScaleAccelerators"
import Tab from "@/components/Tab/Tab"
import { notableProjectsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Our notable projects include",
    link: "",
  },
  {
    id: 2,
    tab: "Evidence for Change",
    link: "",
  },
  {
    id: 3,
    tab: "Related Resources",
    link: "",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/scaleAccelerators/designForSuccess/banner.png')] bg-cover bg-center pt-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-32 mb-16">
          <h1 className="text-4xl font-semibold text-white ">
            Design for Success
          </h1>
        </div>
        <div className="max-w-screen-xl mx-auto flex items-end h-full">
          <div className="flex justify-center items-center">
            <Image
              src="/scaleAccelerators/logo.png"
              height={142}
              width={153}
              alt="logo"
            />
          </div>
        </div>
      </div>

      <Tab tabs={tabs} />

      <div className="max-w-screen-xl mx-auto my-16">
        <div className="mb-5">
          <h2 className="text-cms-primary-black text-lg w-4/5">
            The Design 4 Success (D4S) team at Catalyst Management Services
            specialises in human-centric design, seamlessly blending agile
            methods with strategic planning to create impactful solutions for
            societal issues. They specialise in designing programs, networks,
            and theories of change to address complex challenges.
          </h2>
        </div>
      </div>

      <div className="bg-cms-primary">
        <div className="max-w-screen-xl mx-auto px-20 flex flex-col gap-5 items-center py-10">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white text-3xl font-semibold">
              Following are the CLV objectives
            </h3>
            <div className="border-b border-cms-primary-green w-20" />
          </div>
          <ul className="flex flex-col gap-5 text-white w-10/12">
            {notableProjectsData.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`${
                    notableProjectsData.length !== item.id
                      ? "border-b border-dashed"
                      : ""
                  } pb-4`}
                >
                  <div className="flex items-center gap-5">
                    <Image src={item.iconUrl} width={168} height={74} alt="" />
                    <p className="text-lg">{item.desc}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-16">
        <div className="mb-5 space-y-5">
          <p className="text-cms-primary-black text-lg">
            Driven by our commitment to innovation, every initiative undergoes
            continuous learning and refinement. We collaborate closely with
            partners and communities, co-creating purpose-driven solutions that
            empower and transform. We aim to shape a future where innovation
            catalyses enduring impact, ensuring each project contributes
            meaningfully to positive change.
          </p>

          <p className="text-cms-primary-black text-lg">
            Connect with us to transform your ideas into a tailored roadmap for
            impactful change, develop prototypes for real-world testing, or
            design strategic shifts to enhance the impact of your programs. Your
            vision is our priority!
          </p>
        </div>
      </div>
    </>
  )
}

export default page
