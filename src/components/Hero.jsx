import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div name="home" className="text-[#1B1B1B]">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#1B1B1B md:text-3xl sm:text-2xl text-xl font-bold p-2 uppercase">
          Welcome to ATL Home Buyers
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Your Trusted Partner in Real Estate Solutions
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-[#C4C5BA,] md:text-10xl sm:text-lg font-light py-4">
            Fast, flexible financing that's
          </p>
          <Typed
            className="text-[#C4C5BA,] md:text-10xl sm:text-lg font-bold md:pl-2 pl-2"
            strings={['Empowering.', 'Confidential.', 'Fair.']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="md:text-2xl tex-xl font-light text-[#C4C5BA,]">
          Our mission at ATL Home Buyers is to empower homeowners.
        </p>
        <button className="bg-[#1B1B1B] w-[200px] rounded-md font-medium text-[#C4C5BA] mx-auto py-3 my-2">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
