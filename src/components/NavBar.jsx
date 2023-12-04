import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, animateScroll as scroll } from 'react-scroll'
import { Link as LinkDom } from 'react-router-dom'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold text-[#1B1B1B] m-4">
        ATL Home Buyers
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 underline decoration-[#595f39] hover:decoration-[#e4e4de]">
          <LinkDom
            to="/"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </LinkDom>
        </li>
        <li className="p-4 underline decoration-[#595f39] hover:decoration-[#e4e4de]">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="p-4 underline decoration-[#595f39] hover:decoration-[#e4e4de]">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#1B1B1B] ease-in-out duration-500 bg-[#E4E4DE]'
            : 'fixed left-[-100%] border-[#1B1B1B]'
        }
      >
        <h1 className="w-full text-2xl font-bold text-[#1B1B1B] m-4">
          ATL Homebuyers
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b">
            <LinkDom to="/"> Home </LinkDom>
          </li>
          <li className="p-4 border-b">
            <LinkDom to="/contact">Contact</LinkDom>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
