import { linkedInIcon, twitter } from "@/utils/icon"
import Image from "next/image"
import React from "react"

const Footer = () => {
  return (
    <>
      <div className="bg-cms-primary py-4 text-white text-center">
        <p className="text-xl">Get In Touch: contactus@catalysts.org</p>
      </div>
      <div className="bg-cms-light-black py-14">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-7 text-white">
          <Image src="/footer/logo.png" width={127} height={53} alt="logo" />

          <div className="flex justify-between">
            <ul className="text-[#CBCBCB]">
              <h5 className="text-white">About Us</h5>
              <div className="border-b border-[#98D5C5] w-28 sm:w-52 my-3" />
              <li>Vision</li>
              <li>Our Team</li>
              <li>Our Incubatees</li>
              <li>Our Partners</li>
              <li>Careers</li>
            </ul>

            <ul className="text-[#CBCBCB]">
              <h5 className="text-white">Scale Accelerators</h5>

              <div className="border-b border-[#98D5C5] w-28 sm:w-52 my-3" />
              <li>Evidence for Change</li>
              <li>Design for Success</li>
              <li>Implement for Scale</li>
            </ul>

            <ul className="text-[#CBCBCB]">
              <h5 className="text-white">Domain Areas</h5>
              <div className="border-b border-[#98D5C5] w-28 sm:w-52 my-3" />

              <li>Livelihood</li>
              <li>Health</li>
              <li>Climate Change</li>
              <li>Wellbeing For Workforce</li>
            </ul>

            <ul className="text-[#CBCBCB]">
              <h5 className="text-white">Social Businesses</h5>
              <div className="border-b border-[#98D5C5] w-28 sm:w-52 my-3" />
              <li>
                Catalyst Livelihood <br /> Venture
              </li>
              <li>
                Business Catalyst <br /> Shoonya
              </li>
            </ul>

            <ul className="text-[#CBCBCB]">
              <h5 className="text-white">Collaborative Initiatives</h5>
              <div className="border-b border-[#98D5C5] w-28 sm:w-52 my-3" />

              <li>Community Action Collab</li>
              <li>Catalysing Social Impact</li>
            </ul>
          </div>
          <div className="border-y flex justify-between border-[#C6C6C6] py-4">
            <ul className="flex gap-5">
              <li>Contact Us</li>
              <li>Insights</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
            </ul>

            <ul className="flex items-center gap-5">
              <li>Follow Us:</li>
              <li className="text-2xl">{linkedInIcon}</li>
              <li className="text-2xl">{twitter}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-white">Office Address:</p>
            <p className="text-[#CBCBCB]">
              Catalyst Management Services Pvt. Ltd., #25, 4th Floor, AECS
              Layout, <br /> RMV 2nd Stage, Ashwathnagar, Bangalore – 560 094.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] py-4 text-white text-center flex justify-center items-center">
        <p className="text-[#CBCBCB]">
          © 2024 Catalyst Management Services Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
