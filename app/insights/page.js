"use client"

import Header from "@/components/Header/Header"
import { insightsData, insightsTabs } from "@/utils/data"
import { rightArrow } from "@/utils/icon"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"

const page = () => {
  const [activeTab, setActiveTab] = useState("Blog")
  const [insightsData, setInsightsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://docs.cms.org.in/wp-json/wp/v2/posts?_embed"
        )
        console.log(response.data)

        const formattedData = response.data.map((item) => ({
          id: item.id,
          imageUrl: item._embedded["wp:featuredmedia"][0].source_url,
          category: item.categories.includes(1) ? "Blog" : "Blog", // Adjust based on actual categories
          title: item.title.rendered,
          desc: item.excerpt.rendered.replace(/<[^>]+>/g, ""), // Remove HTML tags
        }))

        setInsightsData((prevData) => [...prevData, ...formattedData])
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  console.log(insightsData)

  // const getBlogs = () => {

  // }

  // const getFilteredData = () => {
  //   return insightsData.filter((item) => item.category === activeTab)
  // }

  // const filteredData = getFilteredData()

  return (
    <>
      <div className="bg-[url('/insights/banner.png')] h-[420px] md:h-[480px] bg-cover bg-center pt-5 pb-14">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Insights
          </h1>
        </div>
      </div>
      <div className="bg-cms-secondary-green">
        <div className="py-7 flex flex-col justify-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap gap-3 mb-8 sm:mb-16">
            {insightsTabs.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    className={`${
                      activeTab === item.id
                        ? "bg-cms-primary text-white"
                        : "bg-white text-[#1A1A1A]"
                    } w-[100px] sm:w-[120px] py-2 border border-cms-primary`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.tab}
                  </button>
                </li>
              )
            })}
          </ul>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {insightsData.map((item) => {
              return (
                <li key={item.id} className="h-full">
                  <div className="w-full sm:w-auto flex flex-col gap-3 bg-white h-full">
                    <Image
                      src={item.imageUrl}
                      width={450}
                      height={260}
                      alt=""
                      className="flex-shrink-0 w-full sm:w-[450px] h-[260px]"
                    />

                    <p className="px-2">{item.category}</p>
                    <hr className="border-t border-gray-200" />

                    <div className="p-2 space-y-3 flex-grow flex flex-col">
                      <h1 className="text-lg text-cms-primary">{item.title}</h1>
                      <p className="text-lg text-[#1A1A1A] flex-grow">
                        {item.desc}
                      </p>
                      <button className="underline text-lg text-cms-primary self-start flex items-center gap-2">
                        Learn more{" "}
                        <span className="text-sm text-[#1A1A1A]">
                          {rightArrow}
                        </span>
                      </button>
                    </div>
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
