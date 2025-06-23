import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
     { id: 'certificate', label: 'Certificate' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  // Highlight active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -30% 0px',
      threshold: 0.25
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })

    return () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-6 sm:px-[10vw] lg:px-[20vw] ${
        isScrolled
          ? 'bg-[#050414] bg-opacity-60 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center py-4 text-white'>
        {/* Logo */}
        <div className='text-lg sm:text-xl font-bold cursor-pointer'>
          <span className='text-[#ffa500]'>&lt;</span>
          <span className='text-white'>Shyam</span>
          <span className='text-[#0000ff]'>/</span>
          <span className='text-white'>Patidar</span>
          <span className='text-green-500'>/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-gray-300 font-medium'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? 'text-[#8245ec]' : ''
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className='hidden md:flex space-x-4'>
          <a
            href='https://github.com/shyampatidar-17'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaGithub size={20} />
          </a>
          <a
            href='https://www.linkedin.com/in/shyam-patidar-736b77257'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX
              className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-[#050414] bg-opacity-80 backdrop-blur-md shadow-md rounded-xl mt-2 mx-4'>
          <ul className='flex flex-col items-center space-y-4 py-6 text-gray-300 font-medium'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? 'text-[#8245ec]' : ''
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-6 pt-4'>
              <a
                href='https://github.com/shyampatidar-17'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-[#8245ec]'
              >
                <FaGithub size={22} />
              </a>
              <a
                href='https://www.linkedin.com/in/shyam-patidar-736b77257'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-[#8245ec]'
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
