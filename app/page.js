import CurrentPath from "@/components/CurrentPath/CurrentPath"
import Header from "@/components/Header/Header"
import EmpoweringChange from "@/components/Home/EmpoweringChange/EmpoweringChange"
import FocusArea from "@/components/Home/FocusArea/FocusArea"
import Impact from "@/components/Home/Impact/Impact"
import Partners from "@/components/Home/Partners/Partners"
import Solutions from "@/components/Home/Solutions/Solutions"
import { searchIcon } from "@/utils/icon"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="bg-[url('/home/banner.png')] h-[720px] bg-center bg-cover py-5">
        {/* <Image
          src="/socialBusinesses/banner.png"
          width={1366}
          height={340}
          className="w-full"
        /> */}
        {/* <div className="search-container relative me-1 w-12 h-12 bg-white border-4 border-white rounded-full p-1 transform transition-all duration-1000 ease-in-out hover:w-[200px] cursor-pointer group">
          <span className="search-icon absolute top-0 right-0 w-10 h-10 text-cms-primary flex items-center justify-center rounded-full text-2xl transition-all duration-1000 ease-in-out group-hover:bg-purple-700 group-hover:text-white">
            {searchIcon}
          </span>
          <input
            type="text"
            id="search-navbar"
            className="search-input border absolute top-0 left-0 w-full h-10 text-sm text-gray-900 rounded-full p-0 pl-5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white hidden"
            placeholder="Search..."
          />
        </div> */}
        <Header />
      </div>
      {/* <CurrentPath /> */}

      <div className="py-12">
        <div className="text-center mb-5">
          <h2 className="text-cms-primary-black text-xl">
            We are a social investment catalyst that partners with change agents
            to solve <br /> complex societal problems, leveraging our 30 years
            of experience and resources. <br /> We are committed to transforming
            social enterprises and impactful initiatives <br /> aligned with
            Sustainable Development Goals.
          </h2>
        </div>
      </div>

      <EmpoweringChange />
      <Solutions />
      <Impact />
      <FocusArea />
      <Partners />
    </>
  )
}
