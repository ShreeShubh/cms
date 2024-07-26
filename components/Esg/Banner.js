import React from 'react'

export default function Home() {
  return (
    <div
      className="h-[550px] md:h-[500px] flex lg:flex-row flex-col lg:justify-center lg:items-center justify-start text-center lg:text-start lg:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/banner.png')] bg-cover bg-center mb-16 bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/mobile-banner.png')]"
      data-aos="fade-up"
    >
      <div className="w-full lg:order-1 order-2 "></div>
      <div className="w-full lg:order-2 order-1 py-4">
        <h1
          className="text-[#043929] lg:text-5xl font-light text-3xl"
          data-aos="zoom-in"
        >
          Catalysing Net-Positive
          <br /> Value Chains for a <br />
          <span className="text-[#05AC8D] font-black lg:text-5xl text-3xl">
            Sustainable Tomorrow
          </span>
        </h1>
      </div>
    </div>
  )
}
