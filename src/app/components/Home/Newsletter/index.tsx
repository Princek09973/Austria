"use client"

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqfyukq-2YisiMWtwWRiqv_YYUk34gewA",
  authDomain: "austria-8fe94.firebaseapp.com",
  projectId: "austria-8fe94",
  storageBucket: "austria-8fe94.firebasestorage.app",
  messagingSenderId: "701006619533",
  appId: "1:701006619533:web:44625eb4ae223c764413c4",
  measurementId: "G-ZMSF0QJGHE"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    // e.preventDefault()
    
    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      await addDoc(collection(db, "newsletter"), {
        email: email,
        timestamp: serverTimestamp(),
        subscribed: true,
        source: "website_newsletter"
      })

      setSubmitSuccess(true)
      setEmail('')
    } catch (err) {
      console.error("Error adding document: ", err)
      setError('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] py-16"
    style={{
      fontFamily:"Gilroy"
    }}>
      <div className='container'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8'>
          <div className='col-span-12 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-12'>
            <div className='mb-10 lg:mx-64'>
              <h2 className='text-2xl font-semibold mb-2 sm:mb-4 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
                Newsletter
              </h2>
              <p className='text-base font-normal text-white/90 text-center mb-8 capitalize'>
                Subscribe to get updates and exclusive offers
              </p>
              
              {submitSuccess ? (
                <div className="text-center py-4">
                  <p className="text-white font-medium bg-black/20 px-4 py-2 rounded-lg">
                    Thank you for subscribing! We've sent a confirmation to your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className='relative rounded-full'>
                    <input
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='py-4 pl-8 pr-20 text-lg w-full bg-white/90 text-black rounded-full border border-white/20 focus:outline-none focus:border-white duration-300 shadow-lg'
                      placeholder='Enter your email address'
                      autoComplete='email'
                      disabled={isSubmitting}
                    />
                    <button 
                      type="submit"
                      className={`group border border-white/20 bg-white/90 hover:bg-white p-3 rounded-full absolute right-2 top-1.5 duration-300 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'
                      }`}
                      disabled={isSubmitting}
                    >
                      <Icon
                        icon={isSubmitting ? 'svg-spinners:270-ring' : 'mynaui:send-solid'}
                        className='text-[#D83E13] group-hover:text-[#E56D09] text-2xl inline-block duration-300'
                      />
                    </button>
                  </div>
                  {error && (
                    <p className="text-white text-sm mt-2 text-center bg-black/20 px-4 py-2 rounded-lg">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter