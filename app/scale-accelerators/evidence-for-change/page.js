import Header from "@/components/Header/Header"
import PartneredWithExperts from "@/components/ScaleAccelerators/EvidenceForChange/PartneredWithExperts/PartneredWithExperts"
import Tab from "@/components/Tab/Tab"
import { notableProjectsData, workIncludeData } from "@/utils/data"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "",
  },
  {
    id: 2,
    tab: "Our Partners",
    link: "",
  },
  {
    id: 3,
    tab: "Our work",
    link: "",
  },
  {
    id: 4,
    tab: "Related Resources",
    link: "",
  },
]

const page = () => {
  return (
    <>
      <div className="bg-[url('/scaleAccelerators/evidenceForChange/banner.png')] bg-cover bg-center pt-5">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-32 mb-16">
          <h1 className="text-4xl font-semibold text-white ">
            Evidence for Change
          </h1>
        </div>
        <div className="max-w-screen-xl mx-auto flex items-end h-full">
          <div className="flex justify-center items-center">
            <Image
              src="/scaleAccelerators/evidenceForChange/logo.png"
              height={142}
              width={153}
              alt="logo"
            />
          </div>
        </div>
      </div>

      <Tab tabs={tabs} />

      <div className="max-w-screen-xl mx-auto mt-14 mb-8">
        <div className="space-y-4 text-cms-primary-black text-lg w-4/5">
          <p className="">
            In Evidence for Change, we specialise in facilitating theories of
            change, alternate analysis, results frameworks, and tools, building
            evidence through pluralistic methodologies, participatory learning,
            and action, and establishing efficient monitoring, evaluation, and
            learning systems through a multidisciplinary approach.
          </p>
          <p>
            We specialise in designing and conducting research and evaluation in
            multiple domains, with a variety of partners through a collaborative
            process.
          </p>
          <p>
            We deliver quality impact evaluations through rigorous experimental,
            quasi-experimental, mixed-method and qualitative methods, nationally
            and internationally. Our focus areas include conducting impact
            assessments, programme evaluations, summative and performance
            evaluations, action research, exploratory and formative assessments,
            literature reviews, sectoral studies, and organisational
            assessments, amongst others.
          </p>
        </div>
      </div>

      <PartneredWithExperts />

      <div className="max-w-screen-xl mx-auto text-lg text-[#1A1A1A] mb-8">
        <p>
          We have carried out over 100 project/programme evaluations and
          organisational assessments, using methods and approaches that help
          communities and programme staff to reflect, assess, learn and apply
          strategies. The team has strong experience in using evidence to
          contribute to shaping public and organisational policies and improving
          programme strategies.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center mb-16">
        <div>
          <Image
            src="/scaleAccelerators/evidenceForChange/image01.png"
            width={444}
            height={320}
            alt=""
          />
        </div>

        <div className="w-[500px] text-lg text-[#1A1A1A] me-16">
          <p>
            Recently, the team (CMS and 3ie) working with the Government,
            concluded the evaluation of the National Rural Livelihood Project’s
            (NRLP) programme working on women empowerment and decision-making
            within the household through access to credit. We studied the impact
            of the programme and institutional support that SHG provides to
            women with the aim of providing a sustainable livelihood and
            financial inclusion. We measured the decision-making capacity of
            women based on the responses recorded to 26 questions that covered a
            variety of scenarios within households, such as food, children,
            education, assets and finance.
          </p>
        </div>
      </div>

      <div className="bg-cms-primary">
        <div className="max-w-screen-xl mx-auto px-20 flex flex-col gap-5 items-center py-10">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white text-3xl font-semibold">
              Other examples of our work include
            </h3>
            <div className="border-b border-white w-20" />
          </div>
          <ul className="flex flex-col gap-5 text-white w-10/12">
            {workIncludeData.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`${
                    workIncludeData.length !== item.id
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
                    <p
                      className={`text-lg ${
                        item.id % 2 === 0 ? "order-1" : "order-2"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default page
