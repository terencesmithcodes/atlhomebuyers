import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Handshake from '../assets/handshake.jpg'
import { Link as LinkDom } from 'react-router-dom'

const EmailForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_mlnpu9a'
    const templateId = 'template_f15cllv'
    const publicKey = '4XMovpdXzHMMyrKjO'

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
      to_name: 'ATL Home Buyer',
    }

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })
  }

  return (
    <div name="contact" className="w-full py-16 px-4 text-[#1B1B1B]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] h-[400px] grid place-self-center mx-auto my-4 rounded-2xl shadow-2xl"
          src={Handshake}
          alt="/"
        />
        <div className="w-[500px] mx-auto grid md:grid-cols-2 ">
          <form onSubmit={handleSubmit} className="emailForm space-y-3 px-10">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-[#1B1B1B]rounded-md px-2 py-2 w-[200px] shadow-2xl"
              required
            />
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-[#C4C5BA]rounded-md px-2 py-2 w-[200px] shadow-2xl"
            />
            <input
              type="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-2 border-[#C4C5BA]rounded-md px-2 py-2 w-[200px] shadow-2xl"
            />
            <textarea
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-2 border-[#C4C5BA]rounded-md px-2 py-2 w-[400px] shadow-2xl"
            ></textarea>
            <p className="w-[400px]">
              <input type="checkbox" className="mr-1" required></input>
              By submitting this form and signing up for texts, you consent to
              receiving marketing text messages from ATL Home Buyers at the
              number provided. Consent is not a condition of purchase. Msg &amp;
              data rates may apply. Unsubscribe at any time by replying STOP or
              clicking the unsubscribe link (where available).
            </p>
            <LinkDom to="privacy">
              <p className="font-bold text-[#1B1B1B] my-3 w-[400px] underline decoration-[#595f39] hover:decoration-[#e4e4de]">
                Read our Privacy Policy &amp; Terms &amp; Conditions
              </p>
            </LinkDom>
            <button className="bg-[#1B1B1B] w-[100px] h-[50px] rounded-md font-medium text-[#E4E4DE] mx-auto shadow hover:shadow-2xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailForm
