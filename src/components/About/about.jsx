import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import profileImage from '../../assets/Profile2.jpg'
import Tilt from 'react-parallax-tilt'

const About = () => {
  return (
    <section
      id='about'
      className='scroll-mt-28 py-16 px-6 sm:px-[10vw] lg:px-[20vw] font-sans bg-transparent'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10'>
        {/* Left Side */}
        <div className='w-full md:w-1/2 text-center md:text-left'>
          {/* Greetings */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Shyam Patidar
          </h2>

          {/* Typing Effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white mr-2'>I am a</span>
            <Typewriter
              words={[
                'Fullstack Developer',
                'Web Designer',
                'Frontend Developer',
                'Python Developer',
                'Backend Developer'
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>

          {/* About Me */}
          <p className='text-base sm:text-lg md:text-lg text-white mb-10 mt-6 leading-relaxed'>
            I’m a Fullstack Developer skilled in the MERN stack, with additional experience in Python and Flask.
            I build responsive, user-friendly web apps with strong backend logic, API integration, and clean UI.
            Passionate about learning and delivering efficient, scalable solutions.
          </p>

          {/* Resume Button */}
          <a
            href='https://drive.google.com/file/d/1RseL77JVG5YofntyDAbyDF2urqh_Iiam/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg,#8245ec,#a855f7)',
              boxShadow: '0 0 4px #8245ec, 0 0 4px #8245ec, 0 0 20px #8245ec'
            }}
          >
            Download CV
          </a>
        </div>

        {/* Right Side - Profile Image with Tilt */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className='w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[24rem] h-auto border-4 border-purple-700 rounded-full'
          >
            <img
              src={profileImage}
              alt='Shyam Patidar'
              className='w-full aspect-square rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
