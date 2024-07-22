'use client'

import { useState } from 'react'
import Link from 'next/link'
import { searchIcon } from '@/utils/icon'
import Image from 'next/image'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [dropdownAbout, setDropdownAbout] = useState(false)
  const [dropdownSol, setDropdownSol] = useState(false)
  const [dropdownSocialBusiness, setDropdownSocialBusiness] = useState(false)
  const [dropdownCollab, setDropdownCollab] = useState(false)
  const [dropdownResources, setDropdownResources] = useState(false)
  const [dropdownDomainAreas, setDropdownDomainAreas] = useState(false)

  const closeAllDropdowns = () => {
    setDropdownAbout(false)
    setDropdownSol(false)
    setDropdownSocialBusiness(false)
    setDropdownCollab(false)
    setDropdownResources(false)
    setDropdownDomainAreas(false)
  }

  const toggleDropdown = (dropdownSetter) => {
    dropdownSetter((prev) => !prev)
  }

  return (
    <nav
      className="border fixed top-0 left-0 w-full bg-white shadow-md z-30"
      data-aos="fade-down"
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-0">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <h1 className="text-2xl text-cms-primary font-semibold">CMS</h1> */}
          <Image
            src="/logo.png"
            width={80}
            height={30}
            alt="logo"
            className="ps-2"
          />
        </Link>
        <div className="flex md:order-2">
          <div className="relative md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <div className="search-container relative me-1 w-12 h-12 bg-white border-4 border-white rounded-full p-1 transform transition-all duration-1000 ease-in-out hover:w-[200px] cursor-pointer group">
              <span className="search-icon absolute top-0 right-0 w-10 h-10 text-cms-primary flex items-center justify-center rounded-full text-2xl transition-all duration-1000 ease-in-out group-hover:bg-purple-700 group-hover:text-white">
                {searchIcon}
              </span>
              <input
                type="text"
                id="search-navbar"
                className="search-input border absolute top-0 left-0 w-full h-10 text-sm text-gray-900 rounded-full p-0 pl-5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white hidden"
                placeholder="Search..."
              />
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            navbarOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto md:border-x-2 md:px-36 md:py-4`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0">
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={() => toggleDropdown(setDropdownAbout)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:p-0 md:w-auto"
              >
                About Us
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                    dropdownAbout ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdownAbout ? 'block' : 'hidden'
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                  onClick={closeAllDropdowns}
                >
                  <li>
                    <Link
                      href="/about-us/vision"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/team"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/incubatees"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Incubatees
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/partners"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={() => toggleDropdown(setDropdownSol)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:p-0 md:w-auto"
              >
                Solutions
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                    dropdownSol ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdownSol ? 'block' : 'hidden'
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                  onClick={closeAllDropdowns}
                >
                  <li>
                    <Link
                      href="/who-we-are"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-choose-us"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Why Choose Us
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={() => toggleDropdown(setDropdownSocialBusiness)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:p-0 md:w-auto"
              >
                Social Businesses
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                    dropdownSocialBusiness ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdownSocialBusiness ? 'block' : 'hidden'
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                  onClick={closeAllDropdowns}
                >
                  <li>
                    <Link
                      href="/who-we-are"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-choose-us"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Why Choose Us
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={() => toggleDropdown(setDropdownDomainAreas)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:p-0 md:w-auto"
              >
                Domain Areas
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                    dropdownDomainAreas ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdownDomainAreas ? 'block' : 'hidden'
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="/who-we-are"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Livelihood
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-choose-us"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-choose-us"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Climate Change
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-choose-us"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Workforce Wellbeing
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}
            <li>
              <Link
                href="/domain-areas"
                className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
              >
                Domain Areas
              </Link>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={() => toggleDropdown(setDropdownCollab)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:p-0 md:w-auto"
              >
                Collaboration
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                    dropdownCollab ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdownCollab ? 'block' : 'hidden'
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                  onClick={closeAllDropdowns}
                >
                  <li>
                    <Link
                      href="/who-we-are"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-choose-us"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Why Choose Us
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={() => toggleDropdown(setDropdownResources)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:p-0 md:w-auto"
              >
                Resources
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                    dropdownResources ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdownResources ? 'block' : 'hidden'
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                  onClick={closeAllDropdowns}
                >
                  <li>
                    <Link
                      href="/who-we-are"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-choose-us"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Why Choose Us
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/careers"
                className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
