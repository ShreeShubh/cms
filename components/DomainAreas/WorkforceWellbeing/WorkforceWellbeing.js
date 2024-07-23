import Image from 'next/image'
import React from 'react'

const WorkforceWellbeing = () => {
  return (
    <div className="flex me-16">
      <div className="bg-cms-primary text-white">
        <div className="w-[400px]">
          <h1 className="text-3xl font-semibold mb-6 ps-16 pe-10 py-10">
            Need Heading <br /> Here
          </h1>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-start justify-center py-5 gap-7 ps-20 pe-16">
          <p className="text-lg text-[#404040]">
            Over the last 14 years, we have partnered with over 30 organisations
            and built our presence in over 351 factories across 14 states in
            India. We have also reached 12 countries across Asia and African
            regions through technical support on building capacities,
            programmes, systems and workplace policies. We have reached over
            230,000 workers and their families (&gt; than 60% are women).
          </p>

          <p className="text-lg text-[#404040]">
            Our work on worker wellbeing, gender equality and women workforce
            empowerment finds mention by International organisations and in
            alliances, such as the United Nations Foundation, World Benchmarking
            Alliance, World Bank, Walmart Foundation, ICRW, amongst several
            others.
          </p>

          <Image
            src="/domainAreas/workforce/image.png"
            width={720}
            height={400}
            alt=""
            className="w-full"
          />

          <p className="text-lg text-[#404040]">
            We are a member of the World Benchmarking Alliance and are on the
            national consultation on Business and Human rights.
          </p>

          <p className="text-lg text-[#404040]">
            To respond to and address the COVID-19 related crisis around health,
            livelihood and social areas, we are building an Apparel Sector
            Response in consultation with key stakeholders from the supply
            chain.
          </p>

          <p className="text-lg text-[#404040]">
            Our core competencies are in developing replicable models on
            transformation, large-scale implementation, transferring knowledge
            and best practices that cut across the boundaries and sectors. We
            have designed and implemented various national and international
            programmes.
          </p>

          <p className="text-lg text-[#404040]">
            We have built a repository of solutions and approaches to complex
            problems. We strongly believe that both worker and business
            wellbeing can be simultaneously maximised, and not at the cost of
            each other.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkforceWellbeing
