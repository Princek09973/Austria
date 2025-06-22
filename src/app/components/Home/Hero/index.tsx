"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"

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

// Country data with name, flag, and dial code
const countries = [
  { name: "India", code: "IN", dialCode: "+91", flag: "https://flagcdn.com/in.svg" },
  { name: "United States", code: "US", dialCode: "+1", flag: "https://flagcdn.com/us.svg" },
  // ... rest of your countries ...
];

// Define the form data type
type FormData = {
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  pincode: string;
  agreed: boolean;
};

export default function Hero() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    pincode: "",
    agreed: false,
  })

  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country)
    setFormData((prev) => ({ ...prev, countryCode: country.dialCode }))
    setShowCountryDropdown(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.agreed) return
    
    setIsSubmitting(true)
    
    try {
      // Get current date in IST
      const now = new Date()
      const ISTOffset = 330 // IST is UTC+5:30 (330 minutes)
      const ISTTime = new Date(now.getTime() + (ISTOffset * 60 * 1000))
      
      // Add form data to Firebase
      const docRef = await addDoc(collection(db, "studyAbroadLeads"), {
        name: formData.name,
        email: formData.email,
        countryCode: formData.countryCode,
        mobile: formData.mobile,
        pincode: formData.pincode,
        agreed: formData.agreed,
        timestamp: serverTimestamp(),
        ISTTimestamp: ISTTime.toISOString(),
      })
      
      console.log("Document written with ID: ", docRef.id)
      setSubmitSuccess(true)
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        mobile: "",
        pincode: "",
        agreed: false,
      })
      setSelectedCountry(countries[0])
    } catch (error) {
      console.error("Error adding document: ", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ... rest of your component remains the same ...
  return (
    <div className="min-h-screen relative" style={{ fontFamily: "Gilroynormal" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.thetimesbusiness.com/wp-content/uploads/2016/11/S_BOKU.jpg"
          alt="University campus"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-8 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Take the First Step to
              <br />
              <span className="bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">
                STUDY ABROAD
              </span>
            </h1>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-black">100% Admission Guaranteed</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-black">No IELTS required</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-black">
                  No APS required
                </span>
              </div>
            </div>
          </div>

          {/* Right Form with reduced width */}
          <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-2xl w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Start your Study Abroad
              <br />
              Journey
            </h2>

            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank you!</h3>
                <p className="text-gray-600">Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                    Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Full Name*"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                    Enter Email Address*
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Email Address*"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-600 mb-1">
                    Mobile number*
                  </label>
                  <div className="flex mt-1">
                    <div className="relative">
                      <button
                        type="button"
                        className="flex items-center px-3 h-full border border-r-0 rounded-l-md bg-gray-50"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      >
                        <Image
                          src={selectedCountry.flag}
                          alt={`${selectedCountry.name} flag`}
                          width={20}
                          height={15}
                          className="mr-2"
                        />
                        <span className="text-sm">{selectedCountry.dialCode}</span>
                      </button>
                      {showCountryDropdown && (
                        <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                          {countries.map((country) => (
                            <div
                              key={country.code}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                              onClick={() => handleCountrySelect(country)}
                            >
                              <Image
                                src={country.flag}
                                alt={`${country.name} flag`}
                                width={20}
                                height={15}
                                className="mr-2"
                              />
                              <span className="text-sm">{country.dialCode}</span>
                              <span className="text-sm ml-2 text-gray-600">{country.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      id="mobile"
                      type="tel"
                      placeholder="Enter mobile number"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-600 mb-1">
                    Pincode
                  </label>
                  <input
                    id="pincode"
                    type="text"
                    placeholder="Enter Pincode"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange("pincode", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div> */}

                <div className="flex items-start gap-2 pt-2">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={(e) => handleInputChange("agreed", e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
                    I have read and agreed to{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      terms
                    </a>
                    {" & "}
                    <a href="#" className="text-blue-500 hover:underline">
                      privacy policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className={`w-full text-white py-3 rounded-md text-lg font-medium mt-6 text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] ${
                    !formData.agreed || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={!formData.agreed || isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book your free consultation'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}