import React from 'react'
import Keys from '../assets/keys.jpg'

const About = () => {
  return (
    <div name="about" className="w-full bg-[#595f39] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded-2xl shadow-2xl"
          src={Keys}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#C4C5BA] font-bold uppercase">
            Reliable Real Estate Investment Partner
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#C4C5BA]">
            What We Do
          </h1>
          <p className="text-[#C4C5BA]">
            At ATL Home Buyers, we understand that life can present unexpected
            challenges, and navigating through property-related difficulties can
            be overwhelming. That&#39;s where we come in – as your reliable real
            estate investment partner, we specialize in acquiring distressed
            off- market properties to provide tailored solutions for homeowners
            facing various challenges.
          </p>
          <button className="bg-[#1B1B1B] text-[#E4E4DE] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
