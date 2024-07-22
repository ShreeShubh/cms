import React from 'react'

const Overview = ({ desc }) => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h1 className="text-[#1A1A1A] text-3xl font-semibold mb-4">Overview</h1>
      <p className="text-lg text-[#646464]">{desc}</p>
    </div>
  )
}

export default Overview
