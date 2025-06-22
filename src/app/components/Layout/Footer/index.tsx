"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa"
import { RiYoutubeLine } from "react-icons/ri"
// import logo from "@/public/assets/image/footerlogo.png"
// import germany from "@/public/assets/image/germanylogo.png"
// import india from "@/public/assets/image/indialogo3.png"

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <section id="" className="bg-[#101010] text-[#FFFFFF] px-4 py-4 sm:px-4 sm:py-6 lg:px-3 lg:py-8">
      <div className="container">
        <div className="flex flex-wrap w-full md:flex-nowrap gap-2 sm:gap-0">
          {/* First Part: Programs Section */}
          <div className="text-left mx-auto mb-4 sm:mb-0">
            <h4 className="text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">
              Programs
            </h4>
            <ul className="space-y-2 text-[#A2A1A1]">
              <li>
                <Link href="/">Bachelor in Germany</Link>
              </li>
              <li>
                <Link href="/">Masters in Germany</Link>
              </li>
              <li>
                <Link href="/">PhD in Germany</Link>
              </li>
              <li>
                <Link href="/">MBA in Germany</Link>
              </li>
            </ul>
          </div>

          {/* Second Part: Services Section */}
          <div className="text-left mx-auto mb-4 sm:mb-0">
            <h4 className="text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-2 text-[#A2A1A1]">
              <li>
                <Link href="/">Study Visa</Link>
              </li>
              <li>
                <Link href="/">Accommodation</Link>
              </li>
              <li>
                <Link href="/">Service in Germany</Link>
              </li>
              <li>
                <Link href="/">Service in India</Link>
              </li>
            </ul>
          </div>

          {/* Third Part:  Section */}
          <div className="text-left mx-auto mb-4 sm:mb-0">
            <h4 className="text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">
              Contact Us
            </h4>
            <ul className="space-y-2 text-[#A2A1A1]">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Terms and Condition</Link>
              </li>
              <li>
                <Link href="/">Privacy Policies</Link>
              </li>
              <li>
                <Link href="/">Refund Policies</Link>
              </li>
            </ul>
          </div>

          {/* Fourth Part: Social Media Links */}
          <div className="m-auto mb-0 sm:mb-2 md:mb-0 w-[40%] sm:w-max">
            <div className="flex space-x-4 justify-center text-[#969696]">
              <a
                href="https://www.instagram.com/germanywale_official/"
                className="text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/germanywale.official"
                className="text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/35885346/"
                className="text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@germanywale_official"
                className="text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiYoutubeLine />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <hr className="my-8 w-[90%] mx-auto border-[#333]" />

        {/* Footer Bottom Section */}
        <div className="px-4 sm:px-4 lg:px-5">
          <div className="mb-2">
            {/* Logo: Clickable, scrolls to top, and redirects to home */}
            <Link href="/" onClick={scrollToTop}>
              {/* <Image
                src={logo}
                alt="Germanywale logo"
                width={150}
                height={56}
                className="h-14 w-auto cursor-pointer"
              /> */}
            </Link>
          </div>
          <div className="flex flex-wrap justify-between sm:px-10">
            <div className="text-[#969696]">
              Copyrights reserved Germanywale, All rights reserved
            </div>
            <div className="text-[#A2A1A1] flex flex-col">
              {/* Germany Address */}
              <div className="flex items-center mb-2">
                {/* <Image src={germany} alt="German flag" width={16} height={12} className="h-4 me-2" /> */}
                <span className="text-xs sm:text-sm">
                  Neckarstrasse, Bensheim, Hessen, Germany
                </span>
              </div>

              {/* India Address */}
              <div className="flex items-center">
                {/* <Image src={india} alt="Indian flag" width={20} height={12} className="h-5 me-2" />/ */}
                <span className="text-xs sm:text-sm">
                  Dalal Compound, Near MSEB office, Katol road, Nagpur
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer