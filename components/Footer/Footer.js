import { linkedInIcon, twitter } from "@/utils/icon"
import Image from "next/image"
import Link from "next/link"
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
              <Link href="/about-us/vision" className="hover:underline">
                <li>Vision</li>
              </Link>
              <Link href="/about-us/team" className="hover:underline">
                <li>Our Team</li>
              </Link>
              <Link href="/about-us/incubatees" className="hover:underline">
                <li>Our Incubatees</li>
              </Link>
              <Link href="/about-us/partners" className="hover:underline">
                <li>Our Partners</li>
              </Link>
              <Link href="/careers" className="hover:underline">
                <li>Careers</li>
              </Link>
            </ul>

            <ul className="text-[#CBCBCB]">
              <h5 className="text-white">Scale Accelerators</h5>
              <div className="border-b border-[#98D5C5] w-28 sm:w-52 my-3" />
              <Link
                href="/scale-accelerators/design-for-success"
                className="hover:underline"
              >
                <li>Design for Success</li>
              </Link>
              <Link
                href="/scale-accelerators/evidence-for-change"
                className="hover:underline"
              >
                <li>Evidence for Change</li>
              </Link>
              <Link
                href="/scale-accelerators/implement-for-scale"
                className="hover:underline"
              >
                <li>Implement for Scale</li>
              </Link>
            </ul>

            <ul className="text-[#CBCBCB]">
              <h5 className="text-white">Domain Areas</h5>
              <div className="border-b border-[#98D5C5] w-28 sm:w-52 my-3" />
              <Link href="/domain-areas/livelihood" className="hover:underline">
                <li>Livelihood</li>
              </Link>
              <Link href="/domain-areas/health" className="hover:underline">
                <li>Health</li>
              </Link>
              <Link
                href="/domain-areas/climate-change"
                className="hover:underline"
              >
                <li>Climate Change</li>
              </Link>
              <Link
                href="/domain-areas/workforce-wellbeing"
                className="hover:underline"
              >
                <li>Wellbeing For Workforce</li>
              </Link>
            </ul>

            <ul className="text-[#CBCBCB]">
              <h5 className="text-white">Social Businesses</h5>
              <div className="border-b border-[#98D5C5] w-28 sm:w-52 my-3" />
              <Link
                href="/social-businesses/catalyst-livelihood-ventures"
                className="hover:underline"
              >
                <li>
                  Catalyst Livelihood <br /> Venture
                </li>
              </Link>
              <Link href="/" className="hover:underline">
                <li>Business Catalyst</li>
              </Link>
              <Link href="/" className="hover:underline">
                <li>Shoonya</li>
              </Link>
            </ul>

            <ul className="text-[#CBCBCB]">
              <h5 className="text-white">Collaborative Initiatives</h5>
              <div className="border-b border-[#98D5C5] w-28 sm:w-52 my-3" />
              <Link
                href="https://communityactioncollab.org/"
                target="_blank"
                className="hover:underline"
              >
                <li>Community Action Collab</li>
              </Link>
              <Link
                href="https://catalysingsocialimpact.in/"
                target="_blank"
                className="hover:underline"
              >
                <li>Catalysing Social Impact</li>
              </Link>
            </ul>
          </div>
          <div className="border-y flex justify-between border-[#C6C6C6] py-4">
            <ul className="flex gap-5">
              <Link href="/contact-us" className="hover:underline">
                <li>Contact Us</li>
              </Link>
              <Link href="/insights" className="hover:underline">
                <li>Insights</li>
              </Link>
              <Link href="#" className="hover:underline">
                <li>Privacy Policy</li>
              </Link>
              <Link href="#" className="hover:underline">
                <li>Sitemap</li>
              </Link>
            </ul>

            <ul className="flex items-center gap-5">
              <li>Follow Us:</li>
              <Link href="/https://in.linkedin.com/" target="_blank">
                <li className="text-2xl">{linkedInIcon}</li>
              </Link>
              <Link href="https://x.com/?lang=en" target="_blank">
                <li className="text-2xl">{twitter}</li>
              </Link>
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
