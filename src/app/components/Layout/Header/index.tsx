'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import Signin from '@/app/components/Auth/SignIn'
import SignUp from '@/app/components/Auth/SignUp'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderType } from '@/app/types/menu'
import { Phone } from 'lucide-react'
import Image from 'next/image'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [navLink, setNavLink] = useState<HeaderType[]>([])

  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setNavLink(data.HeaderData)
      } catch (error) {
        console.error('Error fetching service:', error)
      }
    }
    fetchData()
  }, [])

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false)
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 bg-white shadow-md ${
        sticky ? 'py-2' : 'py-3'
      }`}
      style={{
        fontFamily:"Gilroy"
      }}
      >
      <div>
        <div className='container flex items-center justify-between'>
          {/* Austria Logo Section */}
          <div className="flex items-center gap-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"
              alt="Austria flag logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-gray-800 font-semibold text-lg">Austria</span>
            <span className="text-red-500 font-semibold text-lg">Edu</span>
          </div>
          
          <div className='flex items-center gap-4'>
            {/* Phone Button */}
            <button className="inline-flex items-center justify-center rounded-md text-white hover:bg-blue-700 h-10 px-4 py-2 transition-colors text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] ">
              <Phone className="w-4 h-4 mr-2" />
               8484977234
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg hover:cursor-pointer'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-gray-800'></span>
              <span className='block w-6 h-0.5 bg-gray-800 mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-gray-800 mt-1.5'></span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between gap-2 p-4 border-b'>
            <div className="flex items-center gap-2">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"
                alt="Austria flag logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-gray-800 font-semibold text-lg">Austria</span>
              <span className="text-red-500 font-semibold text-lg">Edu</span>
            </div>
            
            <button
              onClick={() => setNavbarOpen(false)}
              className='hover:cursor-pointer'
              aria-label='Close menu Modal'>
              <Icon
                icon='material-symbols:close-rounded'
                width={24}
                height={24}
                className='text-gray-800 hover:text-red-500'
              />
            </button>
          </div>
          
          <nav className='flex flex-col items-start p-4'>
            {navLink.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            
            <div className='mt-4 w-full'>
              <button className="w-full inline-flex items-center justify-center rounded-md  text-white  h-10 px-4 py-2 transition-colors
              text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] ">
                <Phone className="w-4 h-4 mr-2" />
                 8484977234
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header