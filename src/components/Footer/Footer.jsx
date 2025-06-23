import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId)

        if (section) {
            section.scrollIntoView({ behaviur: "smooth" })
        }
    }


    return (
       <section className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#050314]'>

            <div className='container mx-auto text-center'>
                <h2 className='text-xl font-semibold text-purple-500'>Shyam Patidar</h2>

                <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
                    {[
                        { name: "About", id: "about" },
                        { name: 'Skills', id: 'skills' },
                        { name: 'Education', id: 'education' },
                        { name: 'Certificate', id: 'certificate' },
                        { name: 'Experience', id: 'experience' },
                        { name: 'Projects', id: 'work' },
                        { name: 'Contact', id: 'contact' }
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.id)}
                            className='hover:text-purple-500 text-sm sm:text-base my-1'>{item.name}</button>
                    ))}
                </nav>

                {/*Social media Icons */}

                <div className='flex flex-wrap justify-center space-x-4 mt-5'>
                    {[
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shyam-patidar-736b77257" },
                        { icon: <FaGithub />, link: "https://github.com/shyampatidar-17" },
                        { icon: <FaInstagram />, link: "https://www.instagram.com/" },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110 mx-3"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
                <p className='text-sm text-gray-400 mt-6'>&#169; 2025 Shyam Patidar. All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer