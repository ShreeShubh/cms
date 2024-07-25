"use client"

import { livelihoodTabs } from "@/utils/data"
import React, { useState } from "react"

const Tab = ({ tabs }) => {
  const [isActive, setIsActive] = useState(1)

  return (
    <div className="bg-[#D7EEE8]">
      <ul className="max-w-screen-xl mx-auto flex items-center">
        {tabs.map((item) => {
          return (
            <a href={`#${item.link}`}>
              <li key={item.id}>
                <button
                  className={`py-3 px-6 text-lg ${
                    isActive === item.id
                      ? "bg-[#98D5C5] text-cms-primary-gray border-b-2 border-cms-primary-green"
                      : ""
                  }`}
                  onClick={() => setIsActive(item.id)}
                >
                  {item.tab}
                </button>
              </li>
            </a>
          )
        })}
      </ul>
    </div>
  )
}

export default Tab
