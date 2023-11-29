import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Handshake from '../assets/handshake.jpg'
import { Link as LinkDom } from 'react-router-dom'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mlnpu9a',
        'template_f15cllv',
        form.current,
        '4XMovpdXzHMMyrKjO'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div name="contact" className="w-full py-16 px-4 text-[#1B1B1B]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded-2xl"
          src={Handshake}
          alt="/"
        />
        <div className="w-[500px] my-4">
          <form
            ref={form}
            // onSubmit={sendEmail}
            className="mx-auto grid md:grid-cols-2 space-y-1"
          >
            <label className="">Name</label>
            <input
              type="text"
              name="user_name"
              className="border-2 border-[#C4C5BA] rounded-md w-[200px]"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="border-2 border-[#C4C5BA] rounded-md w-[200px]"
            ></input>
            <label>Phone Number</label>
            <input
              type="phone_number"
              name="user_phone"
              className="border-2 border-[#C4C5BA] rounded-md w-[200px]"
            ></input>
          </form>
          <input type="checkbox"></input>
          <p>
            By submitting this form and signing up for texts, you consent to
            receiving marketing text messages from ATL Home Buyers at the number
            provided. Consent is not a condition of purchase. Msg &amp; data
            rates may apply. Unsubscribe at any time by replying STOP or
            clicking the unsubscribe link (where available).
          </p>
          <LinkDom to="privacy">
            <p className="font-bold text-[#1B1B1B]">
              Read our Privacy Policy &amp; Terms &amp; Conditions
            </p>
          </LinkDom>
          <button
            onClick={sendEmail}
            className="bg-[#1B1B1B] w-[100px] h-[50px] rounded-md font-medium text-[#E4E4DE] mx-auto "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
