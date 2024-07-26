import React from 'react'
import Link from 'next/link'

export default function Home({ onClick }) {
  return (
    <>
      <div
        className="h-[400px] md:h-[900px] lg:flex flex-col justify-end items-center bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/outcome.png')] bg-cover bg-center mb-16 hidden"
        data-aos="zoom-in"
      >
        <button
          className="bg-[#7F3F97] p-2 px-4 rounded-lg text-white mb-6"
          onClick={onClick}
        >
          Contact Us
        </button>
        {/* <div className="text-center bg-red-500"></div> */}
      </div>
      <div
        className="h-[1100px] flex flex-col justify-end items-center bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/outcome-mobile.png')] bg-cover bg-center mb-16 lg:hidden"
        data-aos="zoom-in"
      >
        <button
          className="bg-[#7F3F97] p-2 px-4 rounded-lg text-white mb-6"
          onClick={onClick}
        >
          Contact Us
        </button>
        {/* <div className="text-center bg-red-500"></div> */}
      </div>
    </>
  )
}
