import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  return (
    <section
      id='skills'
      className='scroll-mt-28 py-24 px-6 sm:px-[10vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom'
    >
      {/* Section Title */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2' />
        <p className='text-white mt-4 text-lg font-semibold'>
          A collection of my technical skills and expertise honed through various projects and experiences.
        </p>
      </div>

      {/* Skills Categories */}
     <div className='flex flex-wrap justify-center gap-x-6 gap-y-10'>

        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            className='w-full sm:w-[48%] lg:w-[48%]'
          >
            <div className='bg-gray-900 backdrop-blur-md border-2 border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6 h-full'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white mb-6 text-center'>
                {category.title}
              </h3>

              <div className='grid grid-cols-3 gap-4'>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className='flex flex-col items-center justify-center space-y-2 bg-transparent border border-gray-700 rounded-xl py-3 px-2 text-center transition duration-300 hover:border-[#8245ec]'
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className='w-8 h-8 sm:w-10 sm:h-10 object-contain'
                    />
                    <span className='text-xs sm:text-sm text-gray-300'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  )
}

export default Skills
