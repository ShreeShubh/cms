'use client'

import { livelihoodTabs } from '@/utils/data'
import React, { useState } from 'react'

const Tab = () => {
  const [isActive, setIsActive] = useState(1)

  return (
    <div className="bg-[#D7EEE8]">
      <ul className="max-w-screen-xl mx-auto flex items-center">
        {livelihoodTabs.map((item) => {
          return (
            <li key={item.id}>
              <button
                className={`py-3 px-6 text-lg ${
                  isActive === item.id
                    ? 'bg-[#98D5C5] text-cms-primary-gray border-b-2 border-cms-primary-green'
                    : ''
                }`}
                onClick={() => setIsActive(item.id)}
              >
                {item.tab}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tab
