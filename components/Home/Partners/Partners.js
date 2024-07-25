"use client"

import { useState } from "react"
import { homePartnersData } from "@/utils/data"
import Image from "next/image"

const Partners = () => {
  const [visibleCount, setVisibleCount] = useState(12)

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12)
  }

  return (
    <div className="flex flex-col items-center gap-4 py-16">
      <h2 className="text-cms-primary text-5xl">Partners</h2>
      <div className="border-b border-cms-primary-green w-8" />
      <div className="flex justify-center mt-5">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-5">
          {homePartnersData.slice(0, visibleCount).map((item) => (
            <li key={item.id}>
              <div>
                <Image src={item.imageUrl} width={150} height={60} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {visibleCount < homePartnersData.length && (
        <button
          className="px-5 py-2 border border-cms-primary-green bg-transparent mt-3"
          onClick={loadMore}
        >
          View more
        </button>
      )}
    </div>
  )
}

export default Partners
